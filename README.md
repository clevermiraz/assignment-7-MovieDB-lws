এই মডিউলে যা যা দেখানো হয়েছে, তার উপর ভিত্তি করে আপনাদের জন্যে এই এসাইনমেন্ট তৈরি করা হয়েছে। এই এসাইনমেন্ট অন্যান্য এসাইনমেন্ট এর থেকে সামান্য ভিন্ন। কারণ এই এসাইনমেন্ট এ আপনাদের API বানাতে হবে, সেই সাথে UI তেও কাজ করতে হবে ।

## এসাইনমেন্টে আপনাকে যা যা করতে হবেঃ

✓ আপনাদের 'dist' ফোল্ডার এর সাথে data.js নামে একটি ফাইল রয়েছে। সেখানে মুভির একটি লিস্ট রয়েছে । সেই মুভি লিস্ট গুলো দিয়ে আপনাদের API বানাতে হবে । আমরা যেন `/api/movies` এই endpoint এ GET Request করলে সব গুলো মুভি গুলো দেখতে পারি । এই API UI এর সাথে কানেক্ট করার প্রয়োজন নেই ।

✓ আপনাদের আর একটি API Endpoint বানাতে হবে । আপনার endpoint হবে এমন - `/api/movie/{id}` । এই Endpoint এ id দিয়ে GET রিকুয়েস্ট করলে সেই id এর মুভি Object নিয়ে এসে দেখাবে, PATCH রিকুয়েস্ট করলে মুভি এর `title` প্রোপার্টি এর ভ্যালু পরিবর্তন করা যাবে, এবং DELETE রিকুয়েস্ট করলে মুভিটি Delete হয়ে যাবে । এই API UI এর সাথে কানেক্ট করার প্রয়োজন নেই ।

✓ আপনাদের দেয়া data.js ফাইল এর ডেটা গুলো, Dynamically import করে নিয়ে এসে UI তে মুভি কার্ড আকারে দেখাতে হবে । যেহেতু আমরা Next.js এ fetch করা বোঝাই নি, সেহেতু আপনি fetch ব্যবহার করতে পারবেন না। আপনাকে Dynamically import করে নিয়ে এসেই দেখাতে হবে । এখানে Dynamic import করাটা গুরুত্বপূর্ণ। কিভাবে কোন json file কে ডাইনামিকভাবে ইম্পোর্ট করা যায় সেটি মডিউল এর একটি ভিডিওতে দেখানো হয়েছে।

✓ প্রতিটা মুভি এর ডিটেইলস বাটনে ক্লিক করলে, Movie Details Modal ওপেন হবে এবং URL Route দেখতে হবে এমন - `/movies/:movieId` । অর্থাৎ যেই Movie কার্ড ওপেন হবে, তার আইডি URL এ দেখা যাবে । সেই সাথে Parallel Routing এবং Intercepting Routing ইমপ্লিমেন্ট করতে হবে, যেন নেভিগেশন করে কার্ড এ ক্লিক করলে মোডাল ওপেন হয় আর পেজ রিলোড করলে সেটি যেন একটি আলাদা পেজ আকারে দেখা যায় ।

✓ Application এ যদি এমন কোনো রাউটে যাওয়া হয় যেই রাউট exist করে না, তাহলে Not Found পেজ দেখাতে হবে । আর যদি মুভি ডিটেইলস রাউটের এমন id দিয়ে পেজ রিকুয়েস্ট করা হয়, যেই আইডি দিয়ে কোনো মুভি নেই, সে ক্ষেত্রে আপনাকে এই মেসেজ দেখাতে হবে - "This movie with {movieId} id was not found!" তার মানে আপনাকে কমন একটি Not found page বানাতে হবে এবং single movie এর জন্য আলাদা not found page বানাতে হবে।

✓ পুরো এসাইনমেন্ট টি তে আপনাদের Multi-language ইমপ্লিমেন্ট করতে হবে । দুটি language support করাতে হবে। বাংলা এবং ইংলিশ। দুটি Language json ফাইল আপনাদের নিজেদের বানিয়ে নিতে হবে । Navbar এ language পরিবর্তন করার জন্যে একটি অপশন বানাতে হবে আপনাদের এবং ব্রাউজারের ডিফল্ট language preference অনুযায়ী প্রথম অবস্থায় auto language select করতে হবে যেভাবে মডিউলে দেখানো হয়েছে।

## কিভাবে সাবমিট করবেন:

সবচেয়ে সহজে বুঝার জন্য [এই ভিডিওটি](https://learnwithsumit.com/rnext/courses/rnext/how-to-submit-assignments-in-reactive-accelerator-course) দেখে ফেলুন।

এসাইনমেন্টে আপনাকে মাত্র দুইটা জিনিস সাবমিট করতে হবে।

1. **GitHub private repository link:** অবশ্যই সঠিক গিটহাব রিপোজিটরি লিংক দিতে হবে। ভুলে অন্য কোনো লিংক দিলে আপনি এসাইনমেন্টের মার্ক পাবেন না তাই সাবমিট করার আগে নিউ ট্যাবে লিংক ওপেন করে চেক করে নিবেন সঠিক লিংক জমা দিচ্ছেন কিনা।
2. **Live site link:** নেটলিফাইতে বা ভার্সেলে সাইট হোস্ট করে সাইটের লাইভ লিংক দিতে হবে। ভুলে অন্য কোনো লিংক দিলে আপনি এসাইনমেন্টের মার্ক পাবেন না তাই সাবমিট করার আগে নিউ ট্যাবে লিংক ওপেন করে চেক করে নিবেন সঠিক লিংক জমা দিচ্ছেন কিনা। নেটলিফাইতে বা ভার্সেলে কি ভাবে হোস্ট করতে হয় তা আপনি না জানলে [এইখানে ক্লিক](https://learnwithsumit.com/rnext/courses/rnext/how-to-deploy-your-project-to-vercel-free) করে দেখে নিতে পারেন।

**সাবমিট একবারই করতে পারবেন তাই ভালো করে দেখে সাবমিট করবেন।**

## GitHub private repository কিভাবে তৈরি করবেন:

Github Private repositoty তৈরি করতে [এইখানে ক্লিক করুন](https://classroom.github.com/a/aCgAZXtQ) অথবা ব্রাউজারে এই লিংকে **https://classroom.github.com/a/aCgAZXtQ** ভিজিট করুন। লিংকে যাওয়ার পরে **Accept this assignment** এ ক্লিক করুন। সর্বোচ্চ ১ মিনিট পরে পেইজটি রিলোড দিলে আপনি আপনার রিপোজেটরি লিংক পেয়ে যাবেন। মনে রাখবেন, আপনাকে এই লিংকটি আমাদের প্লাটফর্মে সাবমিট করতে হবে। না বুঝলে উপরে বলা ভিডিও টিউটোরিয়ালটি দেখে নিন।

## এসাইনমেন্ট মার্কস পলিসি:

আপনি নির্ধারিত সময়ে এসাইনমেন্ট জমা দিলে এবং সব কিছু সঠিকভাবে করলে সম্পূর্ণ মার্ক পাবেন। এর পরে জমা দিলে আপনার মার্ক নিচের নিয়মে কাটা যাবে -

1. ডেডলাইনের পরে এক ঘণ্টার মধ্যে জমা দিলে 10% মার্ক কাটা যাবে।
2. ডেডলাইনের পরে এক ঘণ্টার বেশি কিন্তু 24 ঘণ্টার মধ্যে জমা দিলে 30% মার্ক কাটা যাবে।
3. ডেডলাইনের পরে 24 ঘণ্টার বেশি পরে জমা দিলে 50% মার্ক কাটা যাবে।
4. কোর্স ডিউরেশনের পরে আমরা এসাইনমেন্ট গ্রহণ করবো না।

অবশ্যই কোর্স চলাকালিন সময়ে এসাইনমেন্ট জমা দিতে হবে। কোর্সের ডিউরেশন শেষ হয়ে গেলে তার পরে আপনি এসাইনমেন্টে জমা দিলে এসাইনমেন্টের মার্ক পাবেন না।

## সাবমিট করার পর কোড পরিবর্তন:

আপনি ভেবে নিতে পারেন আপনি ওয়েবসাইটে সঠিক সময়ে এসাইনমেন্ট সাবমিট করে নীরবে পরে গিটহাবে কোড পুশ করতে থাকবেন! আপনার গিটহাবের সর্বশেষ কমিট দেখলেই আমরা বুঝতে পারবো আপনি কখন কোড আপডেট করেছেন। সে অনুযায়ী আমরা আপনার মার্ক কেটে নিবো। তাই এসাইনমেন্ট এর সময় পার হবার পরে আমরা আশা করবো আপনি চালাকি করে আর কোড পুশ করবেন না আপনার রিপোজিটরিতে। এটা করলে আপনার সম্পূর্ণ মার্ক কাটা যেতে পারে।

## এসাইনমেন্ট মার্কস কবে পাবেন:

আমরা সর্বোচ্চ ১৫ কার্যদিবসের ভিতরে এসাইনমেন্টের মার্ক দিয়ে দেওয়ার চেষ্টা করবো। ক্ষেত্র বিশেষে একটু দেরি হতে পারে কারো কারো মার্ক পেতে।

-   Install Dev Dependencies for automatic class to className. And Other Hygiene factor

```bash
npm install --save-dev eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh
```

```json
    "devDependencies": {
        "eslint": "^8",
        "eslint-config-next": "14.1.0",
        "eslint-plugin-react": "^7.33.2",
        "eslint-plugin-react-hooks": "^4.6.0",
        "eslint-plugin-react-refresh": "^0.4.5"
    }
```

-   If You Prefer liniting (We Are Using AirBnb Linting Rules)
-   Create a `.eslintrc.cjs` file in the project root and enter the below contents:

```js
module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "next/core-web-vitals",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh"],
    rules: {
        "react/prop-types": "off",
        "react/jsx-no-target-blank": "off",
        "react-refresh/only-export-components": [
            "off",
            { allowConstantExport: true },
        ],
    },
};
```
