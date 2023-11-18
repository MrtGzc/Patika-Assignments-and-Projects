import axios from 'axios';

// Asenkron fonksiyon tanımı
export default async function getData(userId) {
  try {
    const [userData, userPosts] = await Promise.all([
      axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    ]);

    const mergedData = {
      ...userData.data,
      posts: userPosts.data
    };

    return mergedData;
  } catch (error) {
    console.error('Hata:', error);
    throw new Error('Veri alınamadı.');
  }
}