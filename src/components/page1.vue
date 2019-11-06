<template>
   <div class="row">
    <div class="col-8">
      <h3>Draggable</h3>
      <draggable
        v-model="rows"
        class="row wrap fill-height align-center sortable-list"
        style="background: grey;"
      >
        <div
          v-for="row in rows"
          :key="row.index"
          class="sortable"
          xs12
          my-2
        >
          <draggable
            :list="row.items"
            :group="{ name: 'row' }"
            class="row wrap justify-space-around"
            style="width:30%;display:inline-block;float:left;"
          >
            <div
              v-for="item in row.items"
              :key="item.title"
              xs4
              pa-3
              class="row-v"
            >
              <div style="height: 100px;height:60px;border:1px solid #ddd">{{ item.title }}</div>
            </div>
          </draggable>
        </div>
      </draggable>
    </div>

    <!-- <rawDisplayer class="col-3" :value="rows" title="List" /> -->
  </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
  name: "functional",
  display: "Functional third party",
  order: 17,
  components: {
    draggable
  },
  data() {
    return {
      enabled: true,
      rows: [
        {
          index: 1,
          items: [
            {
              title: "item 1"
            }
          ]
        },
        {
          index: 2,
          items: [
            {
              title: "item 2"
            },
            {
              title: "item 3"
            },
            {
              title: "item 4"
            },
            {
              title: "item 5"
            },
            {
              title: "item 6"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>


</style>