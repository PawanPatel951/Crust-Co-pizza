import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "crust_co_cart";
const MAX_QUANTITY = 99;

function loadCart() {
  try {
    if (typeof window === "undefined") return [];

    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];

    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];

    return parsed
      .filter(
        (item) =>
          item &&
          item.id != null &&
          typeof item.name === "string" &&
          Number.isFinite(Number(item.price)) &&
          Number(item.price) >= 0
      )
      .map((item) => ({
        id: item.id,
        name: item.name,
        price: Number(item.price),
        image: item.image || "",
        quantity: Math.min(
          MAX_QUANTITY,
          Math.max(1, Math.floor(Number(item.quantity) || 1))
        ),
      }));
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(loadCart);
  const [lastAction, setLastAction] = useState(null);
  const [notice, setNotice] = useState(null);

  // Save cart safely
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(cartItems)
      );
    } catch {
      // Cart remains usable in memory if storage is unavailable.
    }
  }, [cartItems]);

  // Show a short-lived action message
  const showNotice = useCallback((message, type = "success") => {
    setNotice({
      id: Date.now() + Math.random(),
      message,
      type,
    });
  }, []);

  // Add a pizza or increase its quantity
  const addToCart = useCallback(
    (pizza) => {
      if (
        !pizza ||
        pizza.id == null ||
        !pizza.name ||
        !Number.isFinite(Number(pizza.price)) ||
        Number(pizza.price) < 0
      ) {
        showNotice("Unable to add this pizza.", "error");
        return;
      }

      let added = false;
      let reachedLimit = false;

      setCartItems((current) => {
        const existing = current.find(
          (item) => item.id === pizza.id
        );

        if (existing) {
          if (existing.quantity >= MAX_QUANTITY) {
            reachedLimit = true;
            return current;
          }

          added = true;

          return current.map((item) =>
            item.id === pizza.id
              ? {
                  ...item,
                  quantity: Math.min(
                    MAX_QUANTITY,
                    item.quantity + 1
                  ),
                }
              : item
          );
        }

        added = true;

        return [
          ...current,
          {
            id: pizza.id,
            name: pizza.name,
            price: Number(pizza.price),
            image: pizza.image || "",
            quantity: 1,
          },
        ];
      });

      setLastAction({
        type: "add",
        id: pizza.id,
        at: Date.now(),
      });

      if (reachedLimit) {
        showNotice("Maximum quantity is 99 per pizza.", "error");
      } else {
        showNotice(`${pizza.name} added to your cart!`);
      }
    },
    [showNotice]
  );

  // Increase quantity
  const increaseQuantity = useCallback(
    (id) => {
      let reachedLimit = false;

      setCartItems((current) =>
        current.map((item) => {
          if (item.id !== id) return item;

          if (item.quantity >= MAX_QUANTITY) {
            reachedLimit = true;
            return item;
          }

          return {
            ...item,
            quantity: item.quantity + 1,
          };
        })
      );

      if (reachedLimit) {
        showNotice("Maximum quantity is 99 per pizza.", "error");
        return;
      }

      setLastAction({
        type: "increase",
        id,
        at: Date.now(),
      });
    },
    [showNotice]
  );

  // Decrease quantity; remove when it reaches zero
  const decreaseQuantity = useCallback(
    (id) => {
      setCartItems((current) =>
        current
          .map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0)
      );

      setLastAction({
        type: "decrease",
        id,
        at: Date.now(),
      });
    },
    []
  );

  // Remove an item completely
  const removeFromCart = useCallback(
    (id) => {
      let removedName = "";

      setCartItems((current) => {
        const item = current.find((entry) => entry.id === id);
        removedName = item?.name || "Pizza";

        return current.filter((entry) => entry.id !== id);
      });

      setLastAction({
        type: "remove",
        id,
        at: Date.now(),
      });

      showNotice(`${removedName} removed from your cart.`);
    },
    [showNotice]
  );

  // Clear the complete cart
  const clearCart = useCallback(() => {
    setCartItems([]);
    setLastAction({
      type: "clear",
      at: Date.now(),
    });
    showNotice("Your cart has been cleared.");
  }, [showNotice]);

  // Total number of pizza pieces
  const itemCount = useMemo(
    () =>
      cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      ),
    [cartItems]
  );

  // Number of different pizza varieties
  const uniqueItemCount = cartItems.length;

  // Cart subtotal
  const totalPrice = useMemo(
    () =>
      cartItems.reduce(
        (total, item) =>
          total + item.price * item.quantity,
        0
      ),
    [cartItems]
  );

  // Details for individual cart lines
  const cartDetails = useMemo(
    () =>
      cartItems.map((item) => ({
        ...item,
        subtotal: item.price * item.quantity,
      })),
    [cartItems]
  );

  const value = useMemo(
    () => ({
      cartItems,
      cartDetails,
      itemCount,
      uniqueItemCount,
      totalPrice,
      lastAction,
      notice,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      clearCart,
      showNotice,
    }),
    [
      cartItems,
      cartDetails,
      itemCount,
      uniqueItemCount,
      totalPrice,
      lastAction,
      notice,
      addToCart,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      clearCart,
      showNotice,
    ]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}
