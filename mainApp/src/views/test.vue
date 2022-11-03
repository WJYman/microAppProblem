<template>
  <div class="test" style="padding:100px;">

    <!-- <el-table
      :data="tableData"
      style="width: 70%"
      height="200px"
    >
      <el-table-column
        prop="date"
        label="日期"
        width="180"
        fixed="left"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
        fixed="left"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
      >
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
      >
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
      >
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
        fixed="right"
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        fixed="right"
      >
      </el-table-column>
    </el-table> -->

    <vxe-table
      ref="xTree"
      style="width: 70%; margin-top: 20px;"
      height="200px"
      border
      resizable
      show-overflow
      show-header-overflow
      :tree-config="{transform: true, rowField: 'id', parentField: 'parentId'}"
      :checkbox-config="{labelField: 'id'}"
      :data="tableData1"
    >
      <vxe-column type="checkbox" title="ID" fixed="left" width="280" tree-node></vxe-column>
      <vxe-column field="name" title="Name" width="300"></vxe-column>
      <vxe-column field="size" title="Size" width="300"></vxe-column>
      <vxe-column field="type" title="Type" width="300"></vxe-column>
      <vxe-column field="date" title="Date" fixed="right" width="300"></vxe-column>
    </vxe-table>
  </div>

</template>

<script>
import logoMin from '@/assets/images/space.jpg'
export default {
  components: {
  },
  data() {
    return {
      docForm: `<table style="border-collapse: collapse; width: 100%;" border="1">
<tbody>
<tr>
<td style="width: 100%;">&nbsp;</td>
</tr>
</tbody>
</table>`,
      tableData1: [
        { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
        { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01' },
        { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
        { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },
        { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: null, date: '2021-04-01' },
        { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },
        { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
        { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
        { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },
        { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
        { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }],
      selectId: 1,
      img: logoMin,
      lang: this.$store.getters.lang
    }
  },
  computed: {

  },
  watch: {

  },
  methods: {
    clickIcon() {
      alert(666)
    },
    clickHandle(item) {
      this.selectId = item
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  width: 100%;
  height: 100%;
}
.message {
  display: flex;
  width: 900px;
  height: 600px;
  border: 1px solid #656c75;
  box-sizing: border-box;
  margin: 50px;
  &-list {
    width: 360px;
    padding: 6px 0 6px 6px;
    background-color: #feffff;
    &-content {
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      padding-right: 2px;
      background-color: #feffff;
      .info {
        width: 100%;
        height: 60px;
        background-color: #feffff;
        cursor: pointer;
        padding: 12px 8px;
        user-select: none;
        &:hover{
          background-color: #eceeee;
          .date-time {
            display: none;
          }
          i {
            display: block;
          }
        }
        &.is-active{
          background-color: #e6f0ff;
        }
        &.is-active,
        &:hover {
          border-radius: 4px;
          .info-right {
            div {
              color: #8f969f;
            }
          }
        }
        &-left {
          float: left;
          img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
        }
        &-right {
          float: right;
          width: calc(100% - 44px);
          position: relative;
          div {
            color: #e3e4e8;
            line-height: 1;
            span {
              line-height: 1;
              font-size: 12px;
            }
          }
          &-top {
            display: flex;
            div {
              flex: 1;
              .title {
                display: inline-block;
                vertical-align: top;
                line-height: 1;
                color: #000;
                font-size: 16px;
              }
              .type {
                display: inline-block;
                background-color: #f0e6ca;
                color: #ab7c0d;
                padding: 2px;
                font-size: 12px;
                border-radius: 2px;
                margin-left: 6px;
              }
            }
            .date-time {
              vertical-align: top;
            }
          }
          .desc {
            padding-top: 8px;
            width: calc(100% - 50px);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          i {
            display: none;
            position: absolute;
            transform: translateY(-50%);
            top: 50%;
            right: 10px;
          }
        }
      }
    }
  }
  &-details {
    flex: 1;
    background-color: #f9fbfc;
    padding: 10px;
  }
}

</style>
