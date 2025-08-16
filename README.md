# موقع تحميل الملفات والبرامج

موقع حديث وجميل لتحميل البرامج والملفات المختلفة، مبني باستخدام Next.js و React مع واجهة مستخدم عربية.

## 🌐 الموقع المباشر

**الموقع متاح على GitHub Pages:** [https://tawfik-ui.github.io/tofek](https://tawfik-ui.github.io/tofek)

## المميزات

- 🎨 واجهة مستخدم جميلة وحديثة
- 🔍 بحث متقدم في الملفات والبرامج
- 📂 تصفية حسب الفئات
- 📊 إحصائيات مفصلة
- ⭐ نظام تقييم
- 📱 متجاوب مع جميع الأجهزة
- 🌐 دعم كامل للغة العربية

## التقنيات المستخدمة

- **Next.js 14** - إطار العمل
- **React 18** - مكتبة واجهة المستخدم
- **TypeScript** - لكتابة كود آمن
- **Tailwind CSS** - للتصميم
- **GitHub Pages** - للنشر

## التثبيت والتشغيل

### المتطلبات الأساسية

- Node.js 18 أو أحدث
- npm أو yarn

### خطوات التثبيت

1. استنسخ المشروع:
```bash
git clone https://github.com/tawfik-ui/tofek.git
cd tofek
```

2. ثبت التبعيات:
```bash
npm install
# أو
yarn install
```

3. شغل المشروع في وضع التطوير:
```bash
npm run dev
# أو
yarn dev
```

4. افتح المتصفح على العنوان: `http://localhost:3000`

## النشر على GitHub Pages

المشروع مُعد للنشر التلقائي على GitHub Pages. عند رفع أي تغييرات إلى branch `main`، سيتم النشر تلقائياً.

### النشر اليدوي

```bash
npm run build
```

سيتم إنشاء مجلد `out` يحتوي على الملفات الجاهزة للنشر.

## هيكل المشروع

```
tofek/
├── app/                    # مجلد التطبيق الرئيسي
│   ├── globals.css        # الأنماط العامة
│   ├── layout.tsx         # التخطيط الرئيسي
│   └── page.tsx           # الصفحة الرئيسية
├── .github/workflows/     # GitHub Actions
├── public/                # الملفات العامة
├── package.json           # تبعيات المشروع
├── next.config.js         # تكوين Next.js
├── tailwind.config.js     # تكوين Tailwind CSS
└── README.md              # ملف الوصف
```

## المساهمة

نرحب بمساهماتكم! يرجى:

1. عمل Fork للمشروع
2. إنشاء branch جديد للميزة
3. عمل Commit للتغييرات
4. رفع Pull Request

## الترخيص

هذا المشروع مرخص تحت رخصة MIT.

## الدعم

إذا واجهت أي مشاكل أو لديك اقتراحات، يرجى فتح issue في GitHub.

---

**تم التطوير بـ ❤️ باستخدام Next.js و React**