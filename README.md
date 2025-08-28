1. getElementById, getElementsByClassName, querySelector, querySelectorAll এর মধ্যে পার্থক্য

getElementById → শুধু একটি এলিমেন্টকে খুঁজে আনে যার নির্দিষ্ট id আছে। (একটা মাত্র এলিমেন্ট দেয়)

getElementsByClassName → একই ক্লাস নামের সবগুলো এলিমেন্ট নিয়ে আসে। (HTMLCollection দেয়)

querySelector → CSS সিলেক্টরের মতো কাজ করে, এবং প্রথম যে এলিমেন্ট পায় সেটাই দেয়।

querySelectorAll → CSS সিলেক্টরের মতো কাজ করে, এবং সবগুলো মিলে NodeList আকারে দেয়।


2. DOM-এ নতুন এলিমেন্ট তৈরি ও যোগ করা

নতুন এলিমেন্ট তৈরি করতে → document.createElement("tagName") ব্যবহার করি।

পরে এটাকে DOM-এ ঢোকানোর জন্য → appendChild() বা append() ব্যবহার করা হয়।


3. Event Bubbling কী এবং কিভাবে কাজ করে?

ইভেন্ট বুবলিং মানে হলো ভেতরের এলিমেন্টে কোনো ইভেন্ট ঘটলে সেটা বাইরে পর্যন্ত ছড়িয়ে যাওয়া।


4. Event Delegation কী এবং কেন দরকার?

ইভেন্ট ডেলিগেশন মানে হচ্ছে parent এ ইভেন্ট বসানো, যাতে child এলিমেন্টগুলোতে আলাদা করে বসাতে না হয়।

এটা দরকার কারণ: অনেক child থাকলেও parent-এ একটাই ইভেন্ট হ্যান্ডলার দিয়ে কাজ করা যায়, মেমোরি কম লাগে আর কোডও সহজ হয়।


5. preventDefault() আর stopPropagation() এর মধ্যে পার্থক্য

preventDefault() → কোনো এলিমেন্টের ডিফল্ট কাজ বন্ধ করে।

stopPropagation() → ইভেন্ট বুবলিং বন্ধ করে, মানে ইভেন্ট আর parent পর্যন্ত যাবে না।
