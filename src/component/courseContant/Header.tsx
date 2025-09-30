export default function Header({ title }: { title?: string }) {
  return (
    <header className="bg-indigo-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <i className="fas fa-graduation-cap text-xl"></i>
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
      </div>
    </header>
  );
}
