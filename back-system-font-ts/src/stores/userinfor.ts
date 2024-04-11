declare const localStorage: Storage;

import {
	defineStore
} from 'pinia'
import {
	getUserInfo
} from '@/api/userinfor'
import {ref} from "vue";
export const useUserInfo = defineStore('userinfo',()=> {
	const imageUrl = ref<string>()
	const identity = ref<string>()
	const account = ref<string>()
	const userInfo = async (id:number) =>{
		const res = await getUserInfo(id) as any
		console.log(res.image_url,"///////////////////////")
		imageUrl.value = res.image_url
		identity.value =res.identity
		account.value = res.account
	}

	return {
		imageUrl,userInfo,identity,account
	}
},{
	persist:true,
})
