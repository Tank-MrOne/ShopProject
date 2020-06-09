

# ��shop��Ŀ�������衿 

## 1��ʹ�ý��ּܴ�û�����Ŀ�ṹ
```
	npm i -g @vue/cli	��װ���ּܣ��Ѱ�װ���ԣ�
```

## 2������vue��Ŀ
```
	vue create ��Ŀ����	��Ĭ�Ϻ��Զ������⣬����ѡ��Ĭ�ϣ�
```

## 3����װrouter
```javascript
	npm i vue-router --save	 (ע��������ĿĿ¼�°�װ)
```

## 4����װ������ܷ���������
```
	npm run serve		(���������ṩ����ַ����)
```

## 5�����Դ���ܷ���������̬��Դ�������
```
	npm run build		(����������dist�ļ��м���)
```

```javascript
	�����Ҫ���Ծ�̬��Դ�������Ҫ��װ��̬����
	npm i -g serve		ȫ�ְ�װ��̬����
	serve dist -p 8888	���þ�̬����˿�
```
## 6������Ŀ��srcĿ¼�´��������ļ�
```javascript
	App.vue			����App.vue�б�д��ģ�棩
	pages����views�ļ���	
	store�ļ���		��vuex��
	router�ļ���		��·�ɣ�
	api�ļ���		����ajax����
```

## 7���ҵ�main.js�������沿��ô���
```javascript
	import Vue from 'vue'
	import App from './App.vue'
```

```javascript
  	new Vue({		
?		el:"#app",
  		render: h => h(App),
?	})
```

## 8������eslint
1. �ֲ����ã�ע������

   ```js
   ���磺/* eslint-disable no-unused-vars */
   ```

2. ȫ�����ã�������������
    ` �ҵ�package.json�ļ����ҵ�rules����,���ù���`

  ``` js
  ���磺
  "rules":{
  "no-unused-vars" : "off"
  }
  ```

3. ȫ�����ã����й������á�ѡ�������ʽ��
   	`����Ŀ��Ŀ¼�´���vue.config.js,��д����`

   ```js
   module.exports = {
   	lintOnSave : false  		// ȫ���رգ���ѡһ��
   	lintOnSave : 'warning'		//��ʾ���󣬵���Ӱ����Ŀ���У���ѡһ��
   }
   ```

   

## 9��git����
1. �������ɾ�����ּܴ�����.git�ļ�

2. ʹ������git��ʼ�� 

   ```
   	git init 			(�������زֿ�)
   	git add -A			(�ύ���ݴ���)
   	git commit -m "��ʼ��"	 	(�ύ���ύ��)
   ```

3.  ��github��������һ���Լ���Զ�ֿ̲�

4.  git remote add origin Զ�ֿ̲��ַ	(����Զ�ֿ̲�)

5.  git push -u origin master		(���͵�Զ�ֿ̲�)

   ```
   �����Ҫ��סԶ����������   git config --global credential.helper store
   ��д�������͵�Զ�ֿ̲�	 	git push origin master 		�������ص�master��֧���͵�Զ�̣�
   ��Զ�̵Ĵ�����µ�����		git pull origin master		����Զ�̵�master��֧���͵����أ�
   ```

6.  ����������֧

   ```
   git checkout -b dev		����һ��dev��֧���һ����÷�֧
   �������ȡԶ�̵ķ�֧������	git checkout -b dev origin/dev
   ```

7. ���͵�Զ��

   ```js
   git push
   ```

## 10���routerģ��
1. ��pages��views�ļ����´��������ļ���
   `Home  Search  Login  Register`

2. ����Щ�ļ����¶�����һ��index.vue�ļ�������д��ģ��

   ```vue
   <template>
       <div>Home</div>
   </template>
   
   <script>
   	export default {
   		name:"Home"
   	}
   </script>
   
   <style lang="less" scoped>
   </style>
   ```

3. ��router�ļ������ٴ���һ��routes.js�ļ���ʾ��ģ������

   ```js
   import Home from '../pages/Home'
   	import Search from '../pages/Search'
   	export default[
       {
           path:'/',
           component:Home 
       },
       {
           path:'/search',
           component:Search
       }
   ]
   ```

4. ע��·��,��router�ļ����´���index.js�ļ�����д������ģ��

   ```js
   import Vue from "vue"
   import VueRouter from "vue-router"
   import routes from './routes'
   
   Vue.use(VueRouter)
   
   export default new VueRouter({
       routes
   })
   ```

5. �ҵ�main.js,����router·����

   ```js
   import router from './router'
   ```

6. �ҵ�App.vue�ļ�����template������·�ɣ�ͨ��<router-view></router-view>��ǩ

7. ��compontents�ļ����´���Header��Footer�ļ��У�������Щ�ļ����´���index.vue�ļ�

8. ��App.vue������Header��Footer����ע��

9. �ҵ�router�ļ��У���index.js�ļ��н�·��ģʽ�ĳ�historyģʽ	

   ```js
   mode:'history'	
   ```

## 11�� ��Ⱦͷ���͵ײ���ʽ
1. �ҵ�ͷ���͵ײ��ľ�̬���룬

   ```
   ��header��̬���뿽����components�ļ����µ�Header�����
   ��footer��̬���뿽����components�ļ����µ�Footer�����
   ��css�ж�Ӧ��less���뿽������Ӧ�������
   ��public�ļ����´���һ��css�ļ��У���reset.css�ļ�������ȥ
   ��ͼƬ�ļ��ŵ�����µĴ���һ��images�ļ�����
   ```

2. ��Ҫ��װless��

   ```
   npm i -D less less-loader
   ```

3. ͷ���е�logo��ת

   ```
   ��logo��ͼƬ��ǩ��<router-link to="/"></router-link>��Χ
   ```

4. ע��͵����a��ǩҲ����<router-link></router-link>

5. �����ע����治��ʾHeader��Footer���

   ```js
   // �ҵ�routes.js�ļ�����ע��͵���·�������һ������
   	meta:{
   		isHide:true
   	}
   // ��App.vue�齨���ҵ�Header��Footer�������v-if���ж��Ƿ���ʾ
   ```

## 12����Header������������Ϊ���ʽ��ת
1. ��search��ǩ���һ������¼�

2. Ȼ�����һ�����������б��ʽ��ת

   ```js
   methods:{
   	search(){
   	this.$router.push('./search')
   	}
   }
   ```

   ?	�����ʽ��ת���η�ʽ��
   ?		1��ֱ��ƴ��������

   ```js
   methods:{
   	search(){
   		let {value} = this
   		this.$router.push('./search'+value+'?valueq=��test-query��')
   	}
   }
   ```

   ?		2�������﷨������

   ```js
   methods:{
   	search(){
   		let {value} = this
   		this.$router.push({
   			name:'search',
   			params:{value:value},
   			query:{valueq:"��test-query��"}
   		})
   	}
   }
   ```

3. ���ղ�����Ҫ��router�ļ����µ�routes.js�ļ����ҵ���Ӧ��·�ɹ���

   ```js
   //������յ���params����������path·�������һ�� :������
   	{
   		path:'/search/:value',
   		component:Search
   	}
   //����������ݲ��õ��Ƕ��󴫲Σ���һ��Ҫ��һ��name����
   	{
   		path:'/search/:value',
   		component:Search��
   		name:'search'
   	}
   ```

4. Ϊ�˲��������Ĺ��ܣ�������search·�����������������ʾ��ҳ����

   ```vue
   <template>
   	<div>
   		���յ�params������:{{$route.params.value}}
   		���յ�query������:{{$route.query.valueq}}
   	</div>
   </template>
   ```

5. Ϊ�˷�ֹ�ύ���ַ�������·����ʾ�������������ҵ���Ӧ·�ɣ���path·�����һ����

   ```js
   //Ȼ����Header������ҵ�����ύ������������ͨ���ж������Ͷ�Ӧ�Ķ���
   		methods:{      
   		        search(){
   		            let {value} = this
   		            let location = {
   		                name : 'search'
   		            } 
   		            if(value){
   		                location.params = {value:value}
   		                location.query = {valueq:"��test-query��"}
   		            }
   		            this.$router.push(location)
   		        }
   		}
   ```

6.  ����ظ��ύ��ͬ���ݳ���
   `�ҵ�·��������дpush��replace`

   ```js
   //��ʾ���޸�push��
   const originPush = VueRouter.prototype.push
   
   VueRouter.prototype.push = function(location,onComplete,onAbort){
       if(!onComplete && !onAbort){
           return originPush.call(this,location).catch(err =>{
               console.log(err.message);        
           })
       }else{
           originPush.call(this,location,onComplete,onAbort)
       }
   }
   ```

7. ��·�ɲ���ӳ���props , ��·�ɹ���routes.js�ļ��У��ҵ���Ӧ·�ɣ�����props����

   ```js
   {
   	path:'/search/:value?',
   	component:Search,
   	name :'search',
   	props:route => ({
   		value3 : "���Ե�3��ֵ",
   		value4 : "���Ե�4��ֵ"
   	})
   }
   //��Search����б���ͨ��props���������props�������
   ```

## 13��Home�����������в��
1. �ҵ�Home·�ɣ�����̬ҳ���Home����ȫ��ճ����·����

2.  ��������������������⣬�����Ӧ��css��ͼƬ�ļ�

3. Ϊ����ȾЧ���ã�����ע�͵��ֲ�ͼ������ͼƬ��ֻ��һ��

## 14������ajax���̨���н���
1. �������� npm i -S axios nprogress

2. ��api�ļ����´���һ��ajax.js�ļ�

3. ����ͨ�õĻ�����·���ͳ�ʱʱ��

   ```js
   //����axios
   //import axios from "axios"
   
   //����axios��ʵ�����޸��������� ��baseURL ���޸������·����/api��ͷ��timeout���ó�ʱʱ��15��
   const instance = axios.create({
       baseURL : '/api',
       timeout : 15000
   })
   ```

4. ��ʾ���������

   ```js
   //������������
   import NProgress from 'nprogress'
   
   //ע������������
   instance.interceptors.request.use(config => {
       NProgress.start()
       return config
   })
   
   //ע����Ӧ������
   instance.interceptors.response.use(
       response =>{
           NProgress.done()
       },
       error =>{
           NProgress.done()
       }
   )
   ```

5. ����ɹ�����data

   ```js
   //������������
   import NProgress from 'nprogress'
   //ע������������
   instance.interceptors.request.use(config => {
      NProgress.start()
      return config
   })
   
   //ע����Ӧ������
   instance.interceptors.response.use(
       response =>{
           NProgress.done()
          return response.data 
       },
       error =>{
           NProgress.done()
       }
   )
   ```

6. ����ʧ��

   ```js
   //������������
   import NProgress from 'nprogress'
   //ע������������
   instance.interceptors.request.use(config => {
     NProgress.start()
     return config
   })
   
   //ע����Ӧ������
   instance.interceptors.response.use(
       response =>{
           NProgress.done()
           return response.data
       },
       error =>{
           NProgress.done()
           // 1���׳��쳣
   		// throw error
   
   		// 2�����ش����promise
   		return  Promise.reject(error)
   	}
   )
   ```

7. ��api�ļ����´���һ��index.js�ļ���Ϊ�˰������е�api

   ```js
   //���ȵ����Զ����axios
   import ajax from './ajax'
   
   //���������index.js�����ö��api���󣬱������api����
   export function reqLogin(mobile,password){
       return ajax({
           url:'/user/passport/login',
           method:'POST',
           data:{
               mobile,password
           }
       })
   }
   ```

8. ��ȡ��ҳ�������࣬ʾ�����ü�ͷ����д��

   ```js
   export const reqCategorys = () => ajax('/product/getBaseCategoryList')
   ```

9. ������Ϊ�漰���������Զ�̷��������ͣ����ط������޷��������ԣ�������Ҫ��vue.config.js�ļ������һ����������

   ```js
   devServer:{
   	proxy:{
   		'/api':{
   			target:"http://182.92.128.115",
   			changeOrigin:true,
   		}
   	}
   }
    //�������ַ�ʽ��������ֱ����ajax.js�ļ���ֱ���޸�baseURL��ַΪԶ�̵�ַ - baseURL : 'http://182.92.128.115/api',�����Ƽ���
   ```

10. Ϊ�˲������ϵĲ�����������App.vue�ļ��е������api��ͨ��monted()������api�ӿ�

    ```js
    //���ȵ��� import {reqCategorys} from './api'   ��ȡ��ҳ���������api
    
    //Ȼ��ֱ�ӵ������api�ӿ�
    async mounted(){
        await reqCategorys()
    }
    ```

    

?	

## 15��ʹ��vuex�����������
1. �������� npm i -S vuex

2. ��srcĿ¼�µ�store�ļ����´���index.js�ļ�

   ``` js
   //����ļ���Ҫ����vue �� vuex ,ͨ��use��vuex����ʹ��vuex������¶��ȥ
   const mutations = { }
   const actions = { }
   const getters = { }
   
   export default new Vuex.Store({
       mutations,
       actions,
       getters,
       modules:{
       }
   })
   ```

3. �ֱ�������ݣ���storeĿ¼�´���modules�ļ��У���modules�ļ����´������������ݹ����ļ�����ר�Ź���home������ݵģ�home.js 

4. ��modules�ļ����µ�home.js�ļ��У���������Ҫ�ȵ���֮ǰ���Ƕ���Ļ�ȡ���������api
   	`import {��ȡ��������ĺ�����} from '���api·��'`

5. ����¶vuex���ݹ������

   ```js
   export default {
   	state : {  
   	},
   
       mutations :{
       },
   
       actions:{   
       },
   
       getters:{
       }
   }
   ```

6. ��actions������ʹ�û�ȡ���������api��������ȡ�������ݽ���mutations����

   ```js
   async getCategroyList({commit}){
   	const result = await reqCategoryList()
   
   	if(result.code === 200){
   		const categroyList = result.data
   		commit('mutations��Ӧ�ĺ�����',categroyList)
   	}
   }
   ```

7. ��state�����д���һ���������������������������

   ```js
   state : {
   	categroyList:[]
   }
   ```

8. ��mutations�����д���actions�ύ������������

   ```js
   mutations :{
   	receive_category_list(state,categroyList){
   		state.categroyList = categroyList
   	}
   },
   ```

9. ��store�ļ����µ�index.js�ļ��е����д�õ�home���ݹ����ļ�������ӵ�modules������	

## 16����������̬����
1. �ҵ�components�ļ����µ�TypeNav����������浼��ͨ����̨��ȡ����������������

   ```js
   async mounted() {
   	this.$store.dispatch('getCategroyList');
   },
   ```

2. ͨ�����㷽ʽ��ȡ����������󣬲����������뵽html�ṹ��

   ```js
   computed:{
   	categroyList(){
   		return this.$store.state.home.categroyList
   	},
   },
   ```

## 17��TypeNav����Ч��
1. ʵ��js��������Ƴ��л�Ч�������ȶ���һ������Ĭ��ֵΪ-1����ʾ�ӷ��಻��ʾ

   ```js
   data() {
   	return {
   		currentIndex:-1,
   	}
   },
   ```

2. Ȼ����1����ǩλ������һ�������Ƴ��¼�@mouseenter/@mouseleave,
   `��������ʱ��currentIndex��ֵ����Ϊ��Ӧ���±꣬Ȼ���ڶ�Ӧ�ı�ǩ�����һ���������������item_on�������������ӷ����Ƿ���ʾ`

   ```html
   <div :class="{item_on: ��ǩ���±� === currentIndex}"></div>
   ```

   ```js
   methons:{
   	showSubScategorys(){
   		this.currentIndex = index
   	},
   }
   ```

   `����Ƴ���ʱ��currentIndex��ֵ����Ϊ-2,��ʾ����Ƴ���-1�������������֮ǰ`

   ```js
   methons:{
   	hideCate(){
   		this.currentIndex = -2
   	},
   }
   ```

   `��������ʱ�����һ�����ã����ж�currentIndex�Ƿ���-2���������Ƴ���-2��������Ҫ��ʾ�ӷ���`

   ```js
   methons:{
   	showSubScategorys(){
   		if(this.currentIndex!==-2){
   			this.currentIndex = index
   		}
   	},
   }
   ```

3. ���н������ã�����lodash��throttle����

   ```js
   import throttle  from "lodash/throttle"
   
   //Ȼ������������ʱ�����200�����������
   showSubScategorys:throttle(function (index){
   	if(this.currentIndex!==-2){
   		this.currentIndex = index
   	}
   },200)
   ```

4. ���÷�����ֻ����home��ҳ��ʾ�������������ֻ��ͨ���������Ż���ʾ

   ```js
   //����һ������isShow���ж��Ƿ�����ҳ
   data() {
   	return {
   		isShow : this.$route.path === '/'
   	}
   },
   ```

5. ����������뵼����ʱ����ʾ������

   ```html
   <div @mouseenter="showCate">
       ������
       <div  v-show="isShow">������</div>
   </div>
   ```

   ```js
   showCate(){
   	this.isShow = true
   	this.currentIndex=-1
   }
   ```

## 18�����õ�������ύ��������ת�����������
1. ʹ���¼�ί�ɷ����������з���Ĺ�ͬ����Ԫ������һ������¼�

   ```HTML
   <div @click="toSearch" ></div>
   ```

2. �ڵ���¼���ͨ���¼�����event��target.dataset�������Ի�ȡ�����ǩ�Ķ�Ӧ������ֵ���������ǰ���Ҫ���ݵĲ������Զ����������

   ```html
   <a :data-categoryname="c1.categoryName" :data-category1id="c1.categoryId">{{c1.categoryName}}</a>
   ```

   ```js
   methons:{
   	toSearch(event){
   		const {
   			categoryname,
   			category1id,
   			category2id,
   			category3id
   		} = event.target.dataset
   	}
   }
   
   //�������ܴ���categoryname��category1id��category1id��category3id���Ե�ֵ
   ```

3. �жϵ���ı�ǩ�Ƿ��ܻ�ȡ��categoryname��ֵ��������������κβ���

   ```js
   if(!categoryname) return
   ```

4. �������¼��л�ȡ�󣬽����ж�category1id��category1id��category3id���ĸ�����ֵ�ģ������ֵ��洢��һ��������

   ```js
   const query = {
   	catagoryName : categoryname
   }
   if(category1id){
   	query.category1Id = category1id
   }else if(category2id){
   	query.category2Id = category2id
   }else if(category3id){
   	query.category3Id = category3id
   }
   ```

5. ����һ���������󣬲���ָ��·�ɷ�������

   ```js
   const location = {
   	name : "search",
   	query
   }
   this.$router.push(location)
   ```

6. ����ͷ���������������ݵĲ����͵���������������ݽ��кϲ�
   `�ڷ������з���·������ǰ�����ж�������Ĳ����Ƿ���ֵ������У��򱣴�`

   ```js
   if(value){
   	location.params = {value}
   }
   this.$router.push(location)
   ```

   `�������ݺ󣬽���������������`

   ```js
   this.hideCate()
   ```

   `��ͷ��������������ݺ󣬷���·������ǰ��Ҳ���������Ĳ�������`

   ```js
   location.query = this.$route.query
   this.$router.push(location)
   ```

## 19��mockģ��
1. ��װ���� npm i -S mockjs

2. ��srcĿ¼�´���һ��mockĿ¼��������׼���õ�banner.json/data.json/floors.json�����ļ��Ž�ȥ

3. ��mockĿ¼�´���һ��mockServer.js�ļ�

4. ���ļ��е���mock���

   ```js
   import Mock from 'mockjs'
   ```

5. ����banner.json��floors.json�����ļ�

   ```js
   import banners from './banners.json'
   //banners��������4��ͼƬ�ĵ�ַ����Ҫ����4��ͼƬ�ҵ����ŵ�public�ļ����µ�images�ļ�����
   
   import floors from './floors.json'
   ```

6. ����mock ��mock�ķ������������ݵ��������������·������

   ```js
   Mock.mock('/mock/banners',{
   	code : 200,
   	data : banners
   })
   
   Mock.mock('/mock/floors',{
   	code : 200,
   	data : floors
   })
   ```

7. ��apiĿ¼�´���һ��mockAjax.js�ļ�ר�Ŵ���mock����

   ```js
   import axios from "axios"
   	const instance = axios.create({
   	baseURL : '/',
   	timeout : 15000
   })
   
   instance.interceptors.request.use(config => {
   	return config
   })
   
   instance.interceptors.response.use(
   	response =>{
   		return response.data
   	},
   	error =>{
   		return  Promise.reject(error)
   	}
   )
   
   export default instance	
   ```

8. ��apiĿ¼�µ�index.js�ļ��е���mockAjax

   ```js
   import mockAjax from './mockAjax'
   ```

9. ����һ����ȡbannerͼƬ��api�ӿںͻ�ȡ¥�����ݵ�api�ӿ�		

   ```js
   export const reqBanners = () => mockAjax('/mock/banners')
   export const reqFloors = () => mockAjax('/mock/floors')
   ```

10. ��store�ļ����е�modules���home.js�ļ��У������ȡbanner��floors���ݵĺ���

    ```js
    import {reqBanners,reqFloors} from '../../api'
    
    export default {
        state : {
            banners:[],
            floors:[]
        },
    
        mutations :{
            receive_banners(state,banners){
                state.banners = banners
            },
            receive_floors(state,floors){
                state.floors = floors
            }
        },
    
        actions:{
            async getBanners({commit}){
                const result = await reqBanners()
                if(result.code === 200){
                    const banners = result.data
                    commit('receive_banners',banners)
                }
            },
    
            async getFloors({commit}){
                const result = await reqFloors()
                if(result.code === 200){
                    const floors = result.data
                    commit('receive_floors',floors)
                }
            }
        },
}
    ```
    
    

## 20��ʵ���ֲ�ͼЧ��
1. ��װswiper��� npm i -S swiper

2. �ҵ�home����µ�ListContainer���������swiper��swiper.min.css

   ```js
   import Swiper from 'swiper'
   import from 'swiper/css/swiper.min.css'
   ```

3. �ο�swiper�ٷ��ĵ���ListContainer�Ľṹ�ͱ�д�ã�js������Ҫ��ҳ�����ݼ�����ɺ����Ч��

   ```js
   mounted() {
   	new Swiper ('.swiper-container', {
   		loop: true, 
   		autoplay : true,
   		pagination: {
   			el: '.swiper-pagination',
   		},
   
   		navigation: {
   			nextEl: '.swiper-button-next',
   			prevEl: '.swiper-button-prev',
   		},
   	})   
   },
   ```

4. ����ֲ�ͼӰ�쵽floors��ͼƬ�ֲ�

   `����Ϊbannerģ���swiper-container������ǩ���һ��ref���ԣ�Ȼ��ͨ��vue����refs����ȡ`

   ```html
   <div class="swiper-container" ref="swiper"></div>
   ```

   ```js
   mounted() {
       new Swiper (this.$refs.swiper, {
           loop: true, // ѭ��ģʽѡ��
           autoplay : true,
           // �����Ҫ��ҳ��
           pagination: {
               el: '.swiper-pagination',
           },
           
           // �����Ҫǰ�����˰�ť
           navigation: {
               nextEl: '.swiper-button-next',
               prevEl: '.swiper-button-prev',
           },
       })   
   },
   ```

5. ��̬��ȡbannerͼƬ�����ݣ�ͨ��banner��api��store�����ݽ��,��ListContainer���������ɺ��ü��㷽ʽ��ȡbannerͼƬ����

   `��Home����µ�index.vue��ͨ�����ýӿڷ���banners��floors������`

   ```js
   mounted() {
   	this.$store.dispatch('getBanners')
   	this.$store.dispatch('getFloors')
   },
   ```

   `Ȼ����ListContainer�����ͨ���������Ի�ȡbanner`

   ```js
   import {mapState} from 'vuex'
   computed: {
   	...mapState({
   		banners : state => state.home.banners
   	})
   },
   ```

   `ֱ����Home����µ�index.vue�ļ���ͨ���������Եõ�floors����`

   ```js
   import {mapState} from 'vue'
   computed: {
       ...mapState({
           floors : state => state.home.floors
       })
   },
   ```

6. ͨ��v-for����ȡ��banner���ݶ�̬��ʾ

7. ���banner�ֲ�ͼ���Զ��ֲ�

   1. �������ǽ�swiper���ֲ�js�����װ����

      ```js
      mounted:{
          srollImg(){
              new Swiper (this.$refs.swiper, {
              // new Swiper ('.swiper-container', {
                  loop: true, // ѭ��ģʽѡ��
                  autoplay : true,
                  // �����Ҫ��ҳ��
                  pagination: {
                      el: '.swiper-pagination',
                  },
                  
                  // �����Ҫǰ�����˰�ť
                  navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                  },
              })  
          } 
      },
      ```

   2. Ȼ����Ӽ������ԣ�����vue��nextTick������Ч���ǵ�ʱҳ�����ݸı��ҳ�沢������������swiper

      ```js
      watch:{
          banners(value){
              this.$nextTick(() =>{
                  this.srollImg()
              })
          }
      },
      ```

8. ���ֲ�����������뷽�㸴�ã���componentsĿ¼�´���һ��Carousel��������޸�����Ϊͨ�ö�������props������������һ������

   ```vue
   <template>
     <div class="swiper-container" ref="swiper">
       <div class="swiper-wrapper">
         <div v-for="(item, index) in carouseList" :key="item.id" class="swiper-slide">
           <img :src="item.imgUrl" />
         </div>
       </div>
       <!-- �����Ҫ��ҳ�� -->
       <div class="swiper-pagination"></div>
   
       <!-- �����Ҫ������ť -->
       <div class="swiper-button-prev"></div>
       <div class="swiper-button-next"></div>
     </div>
   </template>
   
   <script type="text/ecmascript-6">
   import Swiper from 'swiper'
   
   export default {
     name: "Carousel",
     props:{
           carouseList : Array,
           autoplay:true        
     },
     watch:{
           carouseList(value){
               this.$nextTick(() =>{
                   this.srollImg()
               })
           }
       },
       mounted:{
           srollImg(){
               new Swiper (this.$refs.swiper, {
               // new Swiper ('.swiper-container', {
                   loop: true, // ѭ��ģʽѡ��
                   autoplay : true,
                   // �����Ҫ��ҳ��
                   pagination: {
                       el: '.swiper-pagination',
                   },
                   
                   // �����Ҫǰ�����˰�ť
                   navigation: {
                       nextEl: '.swiper-button-next',
                       prevEl: '.swiper-button-prev',
                   },
               })  
           } 
       },
   };
   </script>
   ```

9. ��Carousel�����һ��ȫ�ֱ�¶,�ҵ�main.js����ļ������벢ע��

   ```js
   import Carousel from './components/Carousel'
   Vue.component('Carousel',Carousel)
   ```

10. Ȼ��ȫ��Carousel����ŵ���Ӧ��Ҫ�ֲ�ͼ������У�������һ����������������Ҫ�����Ƿ��Զ��ֲ�Ҳ����ͨ����������

    ```js
    <Carousel :carouselList="banners" autoplay/>
    ```

11. ʵ��Floors�����̬���ɣ�������Home�����ͨ��v-for��ȡFloors�Ķ�̬���ݣ�Ȼ��������������ݵ�����������

    ```html
    <Floor v-for="(floor, index) in floors" :key="floor.id" :floor="floor"/>
    ```

12. Ȼ����floor����л�ȡ��������ݽ����Ķ������ݣ������ݶ�̬��ʾ��ҳ����

    ```js
    export default {
        props:['floor']
    }
    ```

13. ���floors�ֲ�ͼ��ʼ�����ܹ�������

    ```js
    watch: {
        carouselList: {
          // ���ӵĻص�
          handler(value) {
            if (this.carouseList.length === 0) return;
            this.$nextTick(() => {
              this.srollImg();
            })
          },
          immediate: true
        }
    }
    ```

## 21��search�����̬����չʾ

 1. �����ҵ���̬����е�searchĿ¼�����Ѿ�д�õ�images��SearchSelector�ļ��У���index.vueճ�������ǵ�search�����

 2. ��apiĿ¼�µ�index.js�ļ��¶���һ����ȡsearch�б�����ݽӿ�,��Ҫ����һ������ options

    ```js
    export function reqProductList(options){
        return ajax({
            url:'/list',
            method:'POST',
            data:options
        })
    }
    ```

3. ��stroeĿ¼�µ�modules�ļ����д���һ������search�����vuex�ļ�search.js

   ```js
   import {reqProductList} from '../../api'
   
   export default {
           state:{
                   productList : {}
           },
           mutations :{
                   receive_product_list(state,productList){
                           state.productList = productList
                   }
           },
           actions:{
                   async getProductList({commit},options){
                           const result = await reqProductList(options)
                           if(result.code === 200){
                                   const productList = result.data
                                   commit('receive_product_list',productList)
                           }
                   }
           },
       	getters:{
                 trademarkList(state){
                       return state.productList.trademarkList  || []
                 }  ,
                 attrsList(state){
                         return state.productList.attrsList || []
                 }
           }
   }
   ```

4. Ȼ����storeĿ¼�µ�index.js�ļ��е���ղŵ�vuex�������

   ```js
   import search from '@/store/modules/search'
   
   export default new Vuex.Store({
       mutations,
       actions,
       getters,
       modules:{
           home,users,search
       }
   })
   ```

5. ��search�����ͨ��dispatch����ȡ��̨���͵�����

   ```js
   import {mapState} from 'vuex'
   export default {
     data() {
       return {
         options:{
           category1Id:'',
           category2Id:'',
           category3Id:'',
           categoryName:'',
           keyword:'',
           props:[],
           trademark:'',
           order:'1:desc',
           pageNo:1,
           pageSize:5
         }
       }
     },
     mounted() {
       this.getProductList()
     },
     computed: {
       ...mapState({
         productList : state => state.search.productList
       })
     },
     methods: {
       getProductList(){
         this.$store.dispatch('getProductList',this.options)
       }
     },
   }
   ```

6. ��Search�����ͨ����̨��ȡ�����ݶ�̬չʾgoodsList���ݣ��������SearchSelector��ͨ����̨��ȡ�����ݶ�̬չʾattrsList��trademarkList����

## 22����̬���ɽ����Ƽ�ͼƬ

 1. �����Զ���mock�ļ�����ģ��ͼƬ��json�ļ�

    ```json
    [
            {
                    "id": "1",
                    "imgUrl": "/images/today01.png"
            },
            {
                    "id": "2",
                    "imgUrl": "/images/today02.png"
            },
            {
                    "id": "3",
                    "imgUrl": "/images/today03.png"
            },
            {
                    "id": "4",
                    "imgUrl": "/images/today04.png"
            }
    ]
    ```

2. ��mockServer.js�ļ��ж���recommend��·��

   ```js
   import recommend from './recommend.json'
   Mock.mock('/mock/recommend',{
           code:200,
           data:recommend
   })
   ```

3. ��apiĿ¼�µ�index.js�ļ��ж����ȡͼƬ���ݵĽӿ�

   ```js
   export const reqRecommend = () => mockAjax('/mock/recommend')
   ```

4. ��storeĿ¼�µ�home���������ļ�����Ӷ�recommend����Ĵ���

   ```js
   import {reqRecommend} from '../../api'
   export default {
       state : {
           recommend:[]
       },
   
       mutations :{
           receive_recommend_list(state,recommend){
               state.recommend = recommend
           }
       },
   
       actions:{
           async getRecommend({commit}){
               const result = await reqRecommend()
               if(result.code === 200){
                   const recommend = result.data
                   commit('receive_recommend_list',recommend)
               }
           }
       },
   
       getters:{}
   }
   ```

5. �ҵ�recommend�����ͨ���ն���Ľӿڷ������󣬻�ȡ���ݲ���̬��ʾ��ҳ����

   ```html
   <ul class="recommend">
       <li class="clock">
           <div class="time">
               <img src="./images/clock.png" />
               <h3>�����Ƽ�</h3>
           </div>
       </li>
       <li v-for="(item, index) in recommend" :key="item.id" class="banner">
           <img :src="item.imgUrl" />
       </li>
   </ul>
   ```

   ```js
   import {mapState} from 'vuex'
   export default {
       computed: {
           ...mapState({
               recommend : state => state.home.recommend
           })
       },
       mounted() {
           this.$store.dispatch('getRecommend')
       },
   }
   ```

   