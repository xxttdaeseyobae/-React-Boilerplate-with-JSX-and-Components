var Post = require('../Model/post');
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/travelnepalapi';
beforeAll(async() => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});
afterAll(async() => {
    await mongoose.connection.close();
});
describe(' Testing of Feedback Schema', () => {
    it(' Testing of Adding Item Contact', () => {
        const post = {
            'title': 'oldman',
            'location': 'golfutar',
            'description': 'oldman in his 90s lost his way'
        };

        return Post.create(post)
            .then((post) => {
                expect(post.title).toEqual('Person');
            });
    });
});
it('Testing of Feedback Deletion', async() => {
    const status = await Post.deleteOne({ "_id": "5d231225d4570230aeca1215" });
    expect(status.ok).toBe(1);
});
it('Testing of Updating Feedback', async() => {
    return Post.findOneAndUpdate({ "_id": "5d22bbe4f6fb3008ceffeecd" }, { $set: { title: 'oldman' } })
        .then((p) => {
            expect(p.title).toEqual('Oldman')
        })
});