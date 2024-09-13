import { defineStore } from 'pinia';
import type { Deal } from '~/models/deal';

export const usePostsStore = defineStore('posts', {
  state: () => ({
    load: 'loading',
    page: 1,
    deals: [] as Deal[],
    currentDeals: [] as Deal[],
    sort: false,
    filterSt: '',
    wishDeals: [] as Deal[],
    orderDeals: [] as Deal[],
    typeOfSort: 'all'
  }),
  actions: {
    async fetchDeals() {
      const res: Response = await fetch('/mock.json');
      this.deals = await res.json();
      this.currentDeals = this.deals;
    },
    setPage( value:number ) {
      this.page = value;
    },
    filterDeals(filter:string) {
      this.filterSt = filter;
      this.currentDeals = this.deals.filter(deal => 
        deal.name.toLowerCase().includes(this.filterSt.toLowerCase())
      );
      if(this.typeOfSort === 'all'){
        this.currentDeals = this.currentDeals;
      } else {
        this.currentDeals = this.currentDeals.filter(_deal => _deal.type === this.typeOfSort)
      }
    },
    addWishDeal(deal:Deal) {
      const newDeal = this.currentDeals.filter(_deal => _deal.id === deal.id)[0];
      if(newDeal.wish){
        this.wishDeals = this.wishDeals.filter(_deal => _deal.id !== newDeal.id);
      }else{
        this.wishDeals.push(newDeal);
      }
      newDeal.wish = !newDeal.wish;
    },
    addOrderDeal(deal:Deal) {
      const newDeal = this.currentDeals.filter(_deal => _deal.id === deal.id)[0];
      if(newDeal.isDeal){
        this.orderDeals = this.orderDeals.filter(_deal => _deal.id !== newDeal.id);
      }else{
        this.orderDeals.push(newDeal);
      }
      newDeal.isDeal = !newDeal.isDeal;
    },
    payOrderDeal(deal:Deal) {
      const newDeal = this.currentDeals.filter(_deal => _deal.id === deal.id)[0];
      this.orderDeals = this.orderDeals.filter(_deal => _deal.id !== newDeal.id);
      newDeal.isDeal = !newDeal.isDeal;
      this.orderDeals.push(newDeal);
    },
    changeSortType(type:string){
      this.typeOfSort = type; 
      if(this.typeOfSort === 'all'){
        this.currentDeals = this.deals;
      } else {
        this.currentDeals = this.deals.filter(_deal => _deal.type === this.typeOfSort)
      }
      this.currentDeals = this.currentDeals.filter(deal => 
        deal.name.toLowerCase().includes(this.filterSt.toLowerCase())
      );


    }
  },
  
});