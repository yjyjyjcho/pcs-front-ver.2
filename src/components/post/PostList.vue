<template>
	<div>
		<table>
			<colgroup>
				<col style="width: 10%;" />
				<col style="width: 60%;" />
				<col style="width: 10%;" />
				<col style="width: 20%;" />
			</colgroup>
			<thead>
				<tr>
					<th>번호</th>
					<th>제목</th>
					<th>작성자</th>
					<th>작성일</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="post in posts" :key="post.id">
					<td scope="col">{{ post.id }}</td>
					<td scope="col">
						<router-link
							:to="{
								name: 'PostViewPage',
								params: { postId: post.id },
							}"
						>
							{{ post.title }}
						</router-link>
					</td>
					<td scope="col">{{ post.user.nickname }}</td>
					<!-- <td scope="col">{{ post.createdAt }}</td> -->
					<!-- slice를 통해 초단위 날짜 삭제 -->
					<td scope="col">{{ post.createdAt.slice(0, -3) }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: 'PostList',
	props: {
		posts: {
			required: true,
			type: Array,
		},
	},
};
</script>
