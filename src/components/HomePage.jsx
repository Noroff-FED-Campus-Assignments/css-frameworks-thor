
import SearchBar from './SearchBar';
import NewPostForm from './NewPostForm';
import Feed from './Feed';

function HomePage() {
  return (
    <div className="container mx-auto">
      <SearchBar />
      <NewPostForm />
      <Feed />
    </div>
  );
}

export default HomePage;