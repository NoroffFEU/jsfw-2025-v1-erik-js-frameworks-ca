export function Footer() {
  return (
    <footer className="mt-6 border-b border-gray-400 bg-gray-200 py-4 sm:py-8">
      <div className="container mx-auto text-center text-gray-700 text-sm sm:text-base">
        {" "}
        All rights reserved &copy; {new Date().getFullYear()}
        <span className="font-bold"> FrameShop.</span>
      </div>
    </footer>
  );
}
