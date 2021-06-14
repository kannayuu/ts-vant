<template>
  <div class="test__wrap">
    <h2>Data Example</h2>
    <p>Data:{{ msg }}</p>
    <hr />
    <h2>Computed Example</h2>
    <input type="text" v-model="name" />
    <hr />
    <h2>Method Example</h2>
    <p>{{ msg }}</p>
    <button @click="modifyText">Change</button>
    <hr />
    <h2>Prop</h2>
    <User
      v-for="item in userList"
      :key="item.itemId"
      v-bind="item"
      @on-remove="removeHadler"
      @change-age="changeHandler"
    ></User>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
//要寫.vue
import User from "../components/User.vue";
//Route如果需要檢查ok，目前註冊有問題先跳過
//import { Route } from "vue-router";
//https://class-component.vuejs.org/guide/class-component.html#data
/*
vue-property-decorator裝飾器
@Component
@Watch
@Prop
@Model
@Emit
*/
// =====<舊的vue演示>=====

/* 
export default{
  name:'Test',
  data(){
    return{
      firstName:'Kanna',
      lastName:'Yuu'
    },
    computed:{
      name:{
        get:function(){
          return `${this.firtstName}-${this.lastName}`
        },
        set:function(){
          const splitted = value.split(" ");
          this.firtstName = splitted[0];
          this.lastName = splitted[1] || "";
        }
      }
    },
    method:{
      modifyText(){

      }
    },
    watch:{
      msg:function(new,old){

      }
    },
    created(){
      console.log("say vue created");
    },
    mounted(){
      console.log("say vue mounted");
    }
  } 
}
*/
// =====<vue-class演示>=====
// 可以選擇是否要有name方式使用
// @Component({
//   name: "Test",
// })

interface IUser {
  itemId: number;
  name: string | number;
  age: number;
  sex?: number;
}

@Component({
  components: {
    User,
  },
})
export default class Test extends Vue {
  msg = "hello-class-ts";
  firtstName = "Kanna";
  lastName = "Yuu";
  userList: Array<IUser> = [
    {
      itemId: 0,
      name: "kanna",
      age: 20,
      sex: 1,
    },
    {
      itemId: 1,
      name: "kiwi",
      age: 18,
      sex: 0,
    },
    {
      itemId: 2,
      name: "hana",
      age: 18,
    },
  ];
  //computed的範例
  get name(): string {
    return `${this.firtstName}-${this.lastName}`;
  }
  set name(value: string) {
    const splitted = value.split(" ");
    this.firtstName = splitted[0];
    this.lastName = splitted[1] || "";
  }

  modifyText(): void {
    this.msg = "Change-hello-class-ts";
  }
  @Watch("msg")
  //onFirstChange，為自定義
  onFirstChange(newValue: string, oldValue: string): void {
    console.log("new:", newValue, "old:", oldValue);
  }
  //生命週期
  created(): void {
    console.log("say vue created");
  }

  mounted(): void {
    console.log("say vue mounted");
  }

  removeHadler(id: number): void {
    console.log(id);
    const index: number = this.userList.findIndex((user) => user.itemId === id);
    console.log(index);
    this.userList.splice(index, 1);
  }

  changeHandler(id: number): void {
    console.log(id);
    const user: IUser = this.userList.find((user) => user.itemId === id);
    // console.log(user);
    user.age++;
  }
  //Navigation Guard Hooks
  // beforeRouteEnter(to: Route, from: Route, next: () => void) {
  //   console.log("beforeRouteEnter");
  //   next();
  // }
}
</script>
