import { defineStore } from 'pinia';

interface Post {
  id: number;
  title: string;
  content: string;
}

export const usePostsStore = defineStore('posts', {
  state: () => ({
    load: 'loading',
    posts: [] as Post[],
    totalPages: 0,
    currentPage: 1,
    currentPosts: [] as Post[],
    sort: false
  }),
  actions: {
    async fetchPosts() {
      const res: Response = await fetch('https://jsonplaceholder.org/posts');
      this.posts = await res.json();
      this.totalPages =  Math.ceil(this.posts.length / 10);
      this.paginatedPosts();
      setTimeout(()=>{
        this.load = 'loaded'},500);
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.load = 'loading';
        this.currentPage++;
        this.paginatedPosts()
        setTimeout(()=>{
          this.load = 'loaded'},500);
      };
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.load = 'loading';
        this.currentPage--;
        this.paginatedPosts()
        setTimeout(()=>{
          this.load = 'loaded'},500);
      };
    },
    paginatedPosts(){
      const start: number = (this.currentPage - 1) * 10;
      const end: number = start + 10;
      this.currentPosts = this.posts.slice(start, end);
    },
    addPost(title: string, text: string){
      const newPost = {
        id: this.posts.length + 1, // или генерируйте ID другим способом
        title: title,
        content: text,
      };
      this.posts.push(newPost); // Добавляем новый пост в общий массив постов
      this.totalPages = Math.ceil(this.posts.length / 10); // Пересчитываем количество страниц
    },
    sortUpdate(){
      if(this.sort){
        this.posts.sort((a, b)=> a.id - b.id)
      } else{
        this.posts.sort((a, b)=> b.id - a.id)
      }

      this.paginatedPosts()
      this.sort = !this.sort; 
    }
  },
});