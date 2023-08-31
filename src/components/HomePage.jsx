import SearchBar from './SearchBar';
import NewPostForm from './NewPostForm';
import Feed from './Feed';

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <SearchBar />

        <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600">
          New Post
        </button>
      </div>

      <div className="grid gap-6">
        <NewPostForm />
        <Feed />
      </div>
    </div>
  );
}

export default HomePage;

