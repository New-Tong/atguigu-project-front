<template>
  <el-card class="box-card">
    <el-button type="primary" icon="Plus" @click="handleAdd"
      >添加品牌</el-button
    >
    <el-table :data="tableData" border style="width: 100%; margin: 10px 0px">
      <el-table-column prop="id" label="序号" width="180" />
      <el-table-column prop="tmName" label="品牌名" width="270" />
      <el-table-column label="品牌LOGO">
        <template #default="scope">
          <el-image preview-teleported :src="scope.row.logoUrl" />
        </template>
      </el-table-column>
      <el-table-column prop="operate" label="操作" width="270">
        <template #default="scope">
          <el-button
            size="small"
            icon="Edit"
            @click="handleEdit(scope.$index, scope.row)"
          >
            修改
          </el-button>
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            icon="Delete"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-block">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40, 50]"
        :size="size"
        :disabled="disabled"
        :background="background"
        layout="prev, pager, next, jumper, ->, sizes, total"
        :total="total"
      />
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { reqTrademark } from "@/api/product/trademark/index";
import type {
  trademark,
  trademarkRespData,
} from "@/api/product/trademark/type";

enum PaginationSize {
  Default = "default",
  Small = "small",
  Large = "large",
}

const tableData = ref<trademark[]>([]);
const currentPage = ref<number>(1);
const pageSize = ref<number>(5);
const size = ref(PaginationSize.Default);
const disabled = ref(false);
const background = ref(true);
const total = ref<number>(0);
const handleAdd = () => {};
const getTrademarks = async () => {
  const result: trademarkRespData = await reqTrademark({
    page: currentPage.value,
    limit: pageSize.value,
  });
  if (result.code === 200) {
    // 成功查询到
    total.value = result.data.total;
    tableData.value = result.data.records;
    return "ok";
  } else {
    // 登录失败
    return Promise.reject(new Error(result.message));
  }
};

const handleEdit = (index, row) => {
  console.log(index);
  console.log(row);
};

const handleDelete = (index, row) => {
  console.log(index);
  console.log(row);
};

onMounted(() => {
  getTrademarks();
});
</script>

<style scoped></style>
