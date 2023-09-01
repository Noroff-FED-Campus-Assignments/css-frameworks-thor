import SearchBar from './SearchBar';
import NewPostForm from './NewPostForm';
import Feed from './Feed';

function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-xl font-extrabold mb-4 md:mb-0">CodeConnect</h1>
        <SearchBar className="bg-white text-gray-800 rounded-md px-4 py-2 w-full md:w-1/2" />
      </div>

      <div className="grid gap-6">
        <NewPostForm className="bg-white rounded-md p-4" />
        <Feed className="bg-white rounded-md p-4" />
      </div>
    </div>
  );
}

export default HomePage;
