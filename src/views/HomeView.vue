<template>
  <div id="home">
    <el-container>
      <el-header>
        <AdminHeader></AdminHeader>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-affix>
            <AdminMenu></AdminMenu>
          </el-affix>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import AdminHeader from '@/components/layout/AdminHeader.vue'
import AdminMenu from '@/components/layout/AdminMenu.vue'
import { useUserInfoStore } from '@/stores/useinfo.store'
import { getUserinfoApi } from '@/apis/userinfo'

const userInfoStore = useUserInfoStore()

const getUserinfo = async () => {
  const res = await getUserinfoApi()
  // console.log(res)
  userInfoStore.userinfo = res.data
}
getUserinfo()
</script>

<style lang="scss" scoped>
#home {
  min-height: 100vh;
}

.el-header {
  background-color: #2b2c43;
  padding: 0;
}
.el-aside {
  background-color: #2b2c43;
  min-height: calc(100vh - 60px);
}
</style>
