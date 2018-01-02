import React, { PureComponent } from 'react';
import './style.less';

export default class Api extends PureComponent {
  componentDidMount () {
    const baseBreadcrumb = [
      {
        path: '/',
        name: '首页'
      },
      {
        path: '',
        name: 'api'
      }
    ];
    this.props.setBreadcrumb(baseBreadcrumb);
  }

  render () {
    return (
      <article className='container-fluid'>
        <section className="container api-index pb-4">
          <h2 className='mb-4'>以下 api 路径均以 https://cnodejs.org/api/v1 为前缀</h2>
          <h3>主题</h3>
          <p>get /topics 主题首页</p>
          <p>接收 get 参数</p>
          <ol>
            <li>· page Number 页数</li>
            <li>· tab String 主题分类。目前有 ask share job good</li>
            <li>· limit Number 每一页的主题数量</li>
            <li>· mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
          </ol>
          <p>示例：/api/v1/topics</p>
          <br/>
          <p>get /topic/:id 主题详情</p>
          <p>接收 get 参数</p>
          <ol>
            <li>· mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
            <li>· accesstoken String 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 is_collect 以及 replies 列表中的 is_uped 值。</li>
          </ol>
          <p>示例：/api/v1/topic/5433d5e4e737cbe96dcef312</p>
          <br/>
          <p>post /topics 新建主题</p>
          <p>接收 post 参数</p>
          <ol>
            <li>· accesstoken String 用户的 accessToken</li>
            <li>· title String 标题</li>
            <li>· tab String 目前有 ask share job dev。开发新客户端的同学，请务必将你们的测试帖发在 dev 专区，以免污染日常的版面，否则会进行封号一周处理。</li>
            <li>· content String 主体内容</li>
          </ol>
          <p>返回值示例：{ `{success: true, topic_id: '5433d5e4e737cbe96dcef312'}` }</p>
          <br/>
          <p>post /topics/update 编辑主题</p>
          <p>接收 post 参数</p>
          <ol>
            <li>· accesstoken String 用户的 accessToken</li>
            <li>· topic_id String 主题id</li>
            <li>· title String 标题</li>
            <li>· tab String 目前有 ask share job</li>
            <li>· content String 主体内容</li>
          </ol>
          <p>返回值示例：{ `{success: true, topic_id: '5433d5e4e737cbe96dcef312'}` }</p>
          <br/>
          <h3>主题收藏</h3>
          <p>post /topic_collect/collect 收藏主题</p>
          <p>接收 post 参数</p>
          <ol>
            <li>· accesstoken String 用户的 accessToken</li>
            <li>· topic_id String 主题的id</li>
          </ol>
          <p>返回值示例：{ `{'success': true}` }</p>
          <br/>
          <p>post /topic_collect/de_collect 取消主题</p>
          <p>接收 post 参数</p>
          <ol>
            <li>· accesstoken String 用户的 accessToken</li>
            <li>· topic_id String 主题的id</li>
          </ol>
          <p>返回值示例：{ `{success: true}` }</p>
          <br/>
          <p>get /topic_collect/:loginname 用户所收藏的主题</p>
          <p>示例：/api/v1/topic_collect/alsotang</p>
          <br/>
          <h3>评论</h3>
          <p>post /topic/:topic_id/replies 新建评论</p>
          <p>接收 post 参数</p>
          <ol>
            <li>· accesstoken String 用户的 accessToken</li>
            <li>· content String 评论的主体</li>
            <li>· reply_id String 如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。</li>
          </ol>
          <p>返回值示例：{ `{success: true, reply_id: '5433d5e4e737cbe96dcef312'}` }</p>
          <br/>
          <p>post /reply/:reply_id/ups 为评论点赞</p>
          <p>接受 post 参数</p>
          <ol>
            <li>· accesstoken String</li>
            <li>· 接口会自动判断用户是否已点赞，如果否，则点赞；如果是，则取消点赞。点赞的动作反应在返回数据的 action 字段中，up or down。</li>
          </ol>
          <p>返回值示例：{ `{'success': true, 'action': 'down'}` }</p>
          <br/>
          <h3>用户</h3>
          <p>get /user/:loginname 用户详情</p>
          <p>示例：/api/v1/user/alsotang</p>
          <br/>
          <p>post /accesstoken 验证 accessToken 的正确性</p>
          <p>接收 post 参数</p>
          <ol>
            <li>· accesstoken String 用户的 accessToken，如果成功匹配上用户，返回成功信息。否则 403。</li>
          </ol>
          <p>返回值示例：{ `{success: true, loginname: req.user.loginname, id: req.user.id, avatar_url: req.user.avatar_url}` }</p>
          <br/>
          <h3>消息通知</h3>
          <p>get /message/count 获取未读消息数</p>
          <p>接收 get 参数</p>
          <ol>
            <li>· accesstoken String</li>
          </ol>
          <p>返回值示例：{ `{data: 3}` }</p>
          <br/>
          <p>get /messages 获取已读和未读消息</p>
          <p>接收 get 参数</p>
          <ol>
            <li>· accesstoken String</li>
            <li>· mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。</li>
          </ol>
          <p>返回值示例：{ `{
            data: {
              has_read_messages: [],
              hasnot_read_messages: [
                {
                  id: '543fb7abae523bbc80412b26',
                  type: 'at',
                  has_read: false,
                  author: {
                    loginname: 'alsotang',
                    avatar_url: 'https://avatars.githubusercontent.com/u/1147375?v=2'
                  },
                  topic: {
                    id: '542d6ecb9ecb3db94b2b3d0f',
                    title: 'adfadfadfasdf',
                    last_reply_at: '2014-10-18T07:47:22.563Z'
                  },
                  reply: {
                    id: '543fb7abae523bbc80412b24',
                    content: '[@alsotang](/user/alsotang) 哈哈',
                    ups: [],
                    create_at: '2014-10-16T12:18:51.566Z'
                  }
                }
              ]
            }
          }` }</p>
          <br/>
          <p>post /message/mark_all 标记全部已读</p>
          <p>接收 post 参数</p>
          <ol>
            <li>· accesstoken String</li>
          </ol>
          <p>返回值示例：{ `{success: true, marked_msgs: [{id: '544ce385aeaeb5931556c6f9'}]}` }</p>
          <br/>
          <p>post /message/mark_one/:msg_id 标记单个消息为已读</p>
          <p>请求示例：/message/mark_one/58ec7d39da8344a81eee0c14</p>
          <p>接收 post 参数</p>
          <ol>
            <li>· accesstoken String</li>
          </ol>
          <p>返回值示例：{ `{success: true, marked_msg_id: '58ec7d39da8344a81eee0c14'}` }</p>
          <br/>
          <h3>知识点</h3>
          <p>
            如何获取 accessToken？ 用户登录后，在设置页面可以看到自己的 accessToken。 建议各移动端应用使用手机扫码的形式登录，验证使用 /accesstoken 接口，登录后长期保存 accessToken。
          </p>

        </section>
      </article>
    );
  }
}
