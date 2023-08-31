function NewPostForm() {
    return (
        <div className="my-4">
            <textarea placeholder="What's on your mind?" className="p-2 w-full border rounded"></textarea>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Post</button>
        </div>
    );
}

export default NewPostForm