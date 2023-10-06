import stadium from '@/api/stadium.js';
import question from '@/api/question.js';
import register from '@/api/register.js';
import login from "@/api/login.js";
import { getUserInfoByToken } from "@/api/update.js";
import recharge from './recharge';
import cdk from "@/api/cdk.js";
import order from "@/api/order.js";


export default {
	...stadium,
	...question,
	...register,
	...login,
	getUserInfoByToken,
	...recharge,
	...cdk,
	...order
}