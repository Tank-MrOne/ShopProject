import { Pagination,MessageBox,Message } from 'element-ui';
import Vue from 'vue'

Vue.component(Pagination.name, Pagination);

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;