<template>
  <el-container>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <!-- <i class="el-icon-location"></i> -->
                <span>导航一</span>
              </template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <!-- <i class="el-icon-location"></i> -->
                <span>导航二</span>
              </template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <!-- <i class="el-icon-location"></i> -->
                <span>导航三</span>
              </template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="3-3">选项1</el-menu-item>
              <el-menu-item index="2-4">选项2</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <div class="table-content">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
          <el-table :data="tableData">
            <el-table-column
              v-for="(item, index) in table_col"
              :key="index"
              align="center"
              :prop="item.param"
              :label="item.label"
              :width="item.width"
              :show-overflow-tooltip="true"
            >
              <template slot-scope="scope">
                <span v-if="item.param == 'index'" class="index-style">
                  {{ indexMethod(scope.$index) }}
                </span>
                <span v-else>
                  {{ scope.row[item.param] }}
                </span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="200px" align="center">
              <template slot-scope="scope">
                <div class="table-btn">
                  <span @click="handleDetail(scope.$index, scope.row)"
                    >查看详情</span
                  >
                </div>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </div>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "HomeCom",
  data() {
    return {
      loading: false,
      table_col: [
        { label: "序号", param: "index", width: "50px" },
        { label: "姓名", param: "name", width: "200px" },
        { label: "日期", param: "date", width: "100px" },
        { label: "地址", param: "address", width: "auto" },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      currentPage: 1,
      pageSize: 10,
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  mounted() {},
  created() {
    this.add(1, 2);
    this.show();
    console.log("$api", this.$api);
  },
  methods: {
    onLoad() {},
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.getters.doneTodos);
      this.$store.dispatch("add");
    },
    add(a, b) {
      return a + b;
    },
    show() {
      return "this is vue2";
    },
    indexMethod(index) {
      return (this.currentPage - 1) * this.pageSize + index + 1;
    },
    handleSizeChange() {},
    handleCurrentChange() {},
    handleDetail() {},
    handleOpen() {},
    handleClose() {},
  },
};
</script>

<style scoped>
.main {
  height: 100%;
}
.el-aside {
  color: #333;

  line-height: 200px;
}
.el-main {
  background-color: rgb(67, 5, 5);
  color: #333;
  text-align: center;
  line-height: 160px;
}

.table-content {
  padding: 10px;
  width: 100%;
}
.el-pagination {
  display: flex;
  justify-content: flex-end;
}
.el-breadcrumb {
}
</style>
