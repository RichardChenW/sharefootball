import stadium from '@/api/stadium.js';
import question from '@/api/question.js';
import register from '@/api/register.js';
import login from "@/api/login.js"

export default {
	...stadium,
	...question,
	...register,
	...login
}