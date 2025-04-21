import { LikeService } from "./like.service";

export class LikeController{
    constructor(private readonly likeService:LikeService){}

    async toggleLike(dataLike) {
        const{user_id,comment_id}=dataLike
        return await this.likeService.toggleLike(user_id, comment_id);
      }
      async getLikeCount(commentId: number) {
        return await this.likeService.countLikes(commentId);
      }
}