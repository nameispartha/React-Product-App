
# 🛒 React Product Cart App

A complete React application for listing products, viewing details, and managing a shopping cart.  
This project is built using **ReactJS + Vite**, along with **Context API**, **React Router DOM**, and **localStorage** to store data even after refreshing the page.

> ⚠️ Note: I haven't focused much on CSS/design in this project — my main goal was to focus on React logic and functionality.

---

## 🧠 What is this project?

This is a **Product Shopping Cart App** where users can:

✅ View a list of products  
✅ View product details  
✅ Add products to the cart  
✅ See all added products on the cart page  
✅ Refresh the page and still keep the cart (thanks to localStorage)

---

## 🚀 What concepts are used and why?

### 1. **ReactJS**

- React helps us break UI into reusable components.
- It handles state and updates the UI efficiently.

### 2. **Vite**

- Modern tool that replaces Create React App.
- Faster startup, live reload, and optimized builds.

### 3. **useState**


const [cart, setCart] = useState([]);


* To manage state (e.g. cart, products, search text, etc.)
* Whenever state changes, UI updates automatically.

### 4. **useEffect**


useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);


* To run code when cart state changes.
* Used here to update localStorage when cart gets updated.

### 5. **localStorage**

* Stores data inside the browser, even after refreshing the page.
* Perfect for small persistence like saving cart data.

### 6. **JSON.stringify() and JSON.parse()**

* Since localStorage only stores strings, we use:

  * `JSON.stringify(cart)` to convert array to string.
  * `JSON.parse(storedData)` to convert back to array when reading.

### 7. **Context API**


export const CartContext = createContext();


* To **share cart data across components** without prop drilling.
* Used to provide `cart` and `AddToCart()` function globally.

### 8. **React Router DOM**

* Used to navigate between different pages.
* `BrowserRouter`, `Route`, `Link`, and `useParams` are used.

---

## 📁 Folder Structure

```


src/
├── Components/
│   └── Header.jsx
│   └── ProductCard.jsx
├── Context/
│   └── CartContext.jsx
├── Pages/
│   └── ProductList.jsx
│   └── ProductDetails.jsx
│   └── Cart.jsx
├── App.jsx
├── main.jsx

```




## 💡 How each part works

### ➤ ProductList.jsx

* Fetches all products using Axios.
* Allows **searching** and **sorting** (H to L, L to H).
* Renders each product using `ProductCard`.

### ➤ ProductCard.jsx

* Shows product info like title, image, and price.
* Has:

  * `View Details` button (navigates to ProductDetails)
  * `Add to Cart` button (adds to cart)
  * `Cart` button (navigates to cart page)

### ➤ CartContext.jsx

* Manages `cart` state globally using React Context.
* Uses `useEffect` to sync `cart` with localStorage.
* Exposes `AddToCart()` function to other components.

### ➤ Cart.jsx

* Gets cart items from context.
* Displays all added products with price and image.

### ➤ ProductDetails.jsx

* Fetches a single product by ID using `useParams`.
* Displays product title, price, and image.
* 


### ➤ Search & Sort Features (Using filter() & sort() Methods)
In the ProductList.jsx file, I added real-time search and sort functionality to give users a smooth e-commerce experience.

### ➤ ✅ filter() – For Live Search Bar
js
Copy
Edit
const Filterproducts = products.filter((items) =>
  items.title.toLowerCase().includes(searchtext.toLowerCase())
);
🔎 What’s happening here?

products is our full product list from the API.

The filter() method loops through every product.

We check: does the title of the product include the search text typed by the user?

We use toLowerCase() so it works even if the user uses capital letters.

💡 Example: If I type shoes, it will show only the products whose title includes "shoes".

### ➤ 🔃 sort() – For High to Low & Low to High Price Sorting
js
Copy
Edit
if (sorted === 'high') {
  Filterproducts.sort((a, b) => b.price - a.price); // Highest price first
} else if (sorted === 'low') {
  Filterproducts.sort((a, b) => a.price - b.price); // Lowest price first
}
💡 Why?

Sometimes the user wants to see:

💰 Expensive products first → "High to Low"

💸 Cheaper products first → "Low to High"

So, using sort(), we rearrange the products based on their price.

🎯 Final Thoughts
These tiny features might look small, but they are super important in real-world apps. They make the app feel interactive, smart, and user-friendly. I’m proud I wrote this logic with my own hands 💪



---

## 🧪 How to Run This Project

```bash
npm install   # Install all dependencies
npm run dev   # Start local development server
```

Then visit: [http://localhost:5173](http://localhost:5173)

---

## 🙋‍♂️ Author

**Created with 💖 by Parthasarathi**
GitHub: [@nameispartha](https://github.com/nameispartha)

📩 If you're learning React or have any questions —
Feel free to **DM me anytime**, I’ll definitely try to help. 💬

---

## 🌟 Future Enhancements

* Add **Remove from cart** feature
* Add **Quantity** for each product
* Add **Backend support** to store cart data
* Add **User Login/Authentication**
* Improve **UI/UX design** in future

---

This project helped me build confidence in using real-time React concepts like Hooks, Context API, Routing, and working with APIs.
Thank you for reading! 🙏


