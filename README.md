# 🍓 Fruit List DOM App

একটা ছোট, কিন্তু মজাদার   **Vanilla&nbsp;JavaScript DOM** প্রজেক্ট— যেখানে ইউজার ইনপুট ফিল্ডে ফলের নাম লিখে `Add Fruit` বাটন চাপলেই সেটি তাৎক্ষণিকভাবে নিচের তালিকায় যোগ হয়। এই রেপোতে আপনি খুব সহজে ব্রাউজার‑ভিত্তিক DOM manipulation শিখতে ও দেখাতে পারবেন।

> **Demo:**  
> ![App Demo](demo/demo.gif) https://selim-ahmed93.github.io/DOM-Practice-1/

---

## ✨ ফিচারসমূহ

- **রিয়েল‑টাইম Add** – ইনপুট + বাটন অথবা `Enter` চাপলেই নতুন `<li>` যুক্ত হয়।
- **Validation** – ফাঁকা ইনপুট দিলে সতর্কবার্তা (alert) দেয়।
- **Keyboard Support** – শুধু মাউস নয়, কিবোর্ড দিয়েও কাজ করে।
- **ক্লিন, রিসponsive UI** – সরল CSS দিয়ে স্ট্রাকচার্ড ও ভিজ্যুয়াল‑ফ্রেন্ডলি ডিজাইন।

---

## 🚀 দ্রুত শুরু (Quick Start)

1. **রেপো ক্লোন করুন**
   ```bash
   git clone https://github.com/<your‑username>/fruit‑list‑dom.git
   cd fruit‑list‑dom
   ```
2. **ফাইল খুলুন**  
   `index.html`‑টি ডাবল‑ক্লিক করলেই আপনার ডিফল্ট ব্রাউজারে চলবে।

> কোনও প্যাকেজ ম্যানেজার বা build‑tool দরকার নেই—শুধু ব্রাউজারই কEnough! 😉

---

## 📁 প্রজেক্ট স্ট্রাকচার

```text
fruit‑list‑dom/
├─ index.html      # মূল HTML স্ক্যাফোল্ড
├─ style.css       # সরল স্টাইলিং (ঐচ্ছিক, চাইলে Tailwind/Bootstrap যোগ করতে পারেন)
├─ script.js       # Vanilla JS (DOM logic)
└─ demo/           # স্ক্রিনশট বা জিআইএফ ফোল্ডার
```

---

## ⚙️ কোড ব্যাখ্যা (script.js)

```js
// DOM Elements
const inputField = document.querySelector('#userInput');
const addButton  = document.querySelector('#btnAdd');
const fruitList  = document.querySelector('#fruitList');

// Core Function
function addFruit() {
  const fruitName = inputField.value.trim();
  if (fruitName === '') {
    alert('Please write something!');
    return;
  }
  const li = document.createElement('li');
  li.textContent = fruitName;
  fruitList.appendChild(li);
  inputField.value = '';
}

// Events
addButton.addEventListener('click', addFruit);
inputField.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addFruit();
});
```

পাঠযোগ্যতা বাড়াতে **সুন্দর ভ্যারিয়েবল নাম, ফাংশন বিভাজন, ও কমেন্ট** দিয়েছি—যাতে নতুনরা সহজেই বুঝতে পারে।

---

## 🛠 টেকনোলজি

- **HTML5** – বেসিক মার্কআপ
- **CSS3** – হালকা স্টাইলিং
- **Vanilla JavaScript** – শুধু ব্রাউজার API (কোনও লাইব্রেরি নেই)

---

## 🤝 কন্ট্রিবিউশন

Pull Request স্বাগত! ✌️  নতুন ফিচার, বাগ‑ফিক্স, বা ডকুমেন্টেশন ইমপ্রুভমেন্ট— যেকোনো কিছু যোগ করতে দ্বিধা করবেন না।

```bash
# নতুন ব্রাঞ্চ বানান
git checkout -b feature/my‑awesome‑feature

# কোড করুন, কমিট করুন
git commit -m "Add my awesome feature"

git push origin feature/my‑awesome‑feature
# তারপর PR খুলে ফেলুন
```

---

## 📜 লাইসেন্স

এই প্রজেক্ট **MIT License** এর অধীনে— তো স্বচ্ছন্দে ব্যবহার, কপি, মডিফাই, ও ডিস্ট্রিবিউট করুন।

---

 🙏 ধন্যবাদ

হ্যাপি কোডিং! 💚
