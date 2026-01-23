import Container from "./container";

export default function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <Container>
        <div className="py-10 text-sm text-gray-600">
          <p className="font-medium text-gray-800">Neutral Demo School</p>
          <p className="mt-1">A clean, mobile-first demo template.</p>
          <p className="mt-4 text-xs text-gray-500">
            © {new Date().getFullYear()} Neutral Demo. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
