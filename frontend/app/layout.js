export const metadata = {
  title: "الأسطورة أونلاين | الدفع الإلكتروني وشحن الرصيد",
  description: "الأسطورة أونلاين - حلول الدفع الإلكتروني وشحن الرصيد والألعاب والبرامج والبطاقات الإلكترونية بسرعة وأمان",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}

// Global CSS imports kept exactly as in CRA
import "../src/index.css";
import "../src/App.css";
