import profileImage from '../assets/profileimg.png';

function Feed() {
  return (
    <div className="my-4">
      <div className="my-6 comment-card p-4 bg-comment border rounded">
        <div className="flex items-center justify-evenly">
          <div className="flex flex-col  items-center mx-3">
            <img src={profileImage} alt="Profile Image" className="w-10 h-10 rounded-full" />
            <h2 className="text-lg font-semibold mb-3">John Doe</h2>
          </div>
          <p className=''>Hello, this is my first post, follow me for more.</p>
        </div>
      </div>
      <div className="my-6 comment-card p-4 bg-comment border rounded">
        <div className="flex items-center justify-evenly">
          <div className="flex flex-col items-center mx-3">
            <img src={profileImage} alt="Profile Image" className="w-10 h-10 rounded-full" />
            <h2 className="text-lg font-semibold mb-3">Alice Smith</h2>
          </div>
          <p className="">Wow, this looks amazing! Keep up the great work!</p>
        </div>
      </div>

      <div className="my-6 comment-card p-4 bg-comment border rounded">
        <div className="flex items-center justify-evenly">
          <div className="flex flex-col items-center mx-3">
            <img src={profileImage} alt="Profile Image" className="w-10 h-10 rounded-full" />
            <h2 className="text-lg font-semibold mb-3">Ethan Williams</h2>
          </div>
          <p className="">Impressive coding skills! Im learning a lot from your posts.</p>
        </div>
      </div>

      <div className="my-6 comment-card p-4 bg-comment border rounded">
        <div className="flex items-center justify-evenly ">
          <div className="flex flex-col items-center mx-3">
            <img src={profileImage} alt="Profile Image" className="w-10 h-10 rounded-full" />
            <h2 className="text-lg font-semibold mb-3">Olivia Johnson</h2>
          </div>
          <p className="">Love your content! Looking forward to more posts.</p>
        </div>
      </div>
    </div>
  );
}

export default Feed;