<template>
  <div>
    name:{{ name }} sex:{{ SEX[sex] }} age:{{ age }}
    <button @click="remove(itemId)">del</button>
    <button @click="changeAge(itemId)">+1</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

enum Sex {
  "男" = 1,
  "女" = 0,
}

@Component({
  name: "User",
})
export default class User extends Vue {
  //利用enum計算一個屬性
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  SEX: any = Sex;

  @Prop({ type: Number })
  itemId: number | undefined;

  @Prop([String, Number])
  name!: string | number;

  @Prop({ type: Number })
  age!: number;

  //默認值
  @Prop({ type: Number, default: 0 })
  sex!: number;

  @Emit("on-remove")
  remove(itemId: number): number {
    return itemId;
  }
  @Emit()
  changeAge(itemId: number): number {
    return itemId;
    //如果沒有寫的狀況會變成這樣'change-age'
  }
}
</script>

<style></style>
