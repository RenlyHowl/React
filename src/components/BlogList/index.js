import React, { Component } from 'react'
import {connect} from "react-redux"

// 导入BlogItem组件
import BlogItem from './BlogItem'
// 导入ajax请求方法
import {getPosts} from '../../services/getPosts'

// 引入我们的action方法, 再把action方法传到下面connect方法中
import {fetchBlogList} from '../../Actions/blogList'

class index extends Component {
  // 这里还需要对传入的数据进行propTypes的检查
  constructor() {
    super();
    this.state = {
      postlists: [],
      isLoading: false
    }
  }
  render() {
    console.log(this.props)
    /* 根据传入的isLoading的值来条件渲染;
        我们将变量解构出来 */
    let {lists, isLoading} = this.props;
    return (
      <ul>
        {
          isLoading
          ?
          <h1>isLoading</h1>
          :
          lists.map((item) => {
            return <BlogItem key={item.id} {...item}></BlogItem>
          })
        }
        <>{this.state.postlists.map((item) => {
        return(
          <div key={item.id}>
            <h1 style={{color: "red"}}>{item.title} </h1>
            <span>{item.body} </span>
          </div>
        )
        })} 
        </>
      </ul>
    )
  }

  getData = () => {
    getPosts()
    .then((res) => {
      // console.log(res);
      if(res.status === 200){
        this.setState({
          postlists: res.data
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }

  // 测试组件能否请求到ajax数据
  componentDidMount() {
    // this.getData()
    // 通过this.props调用
    this.props.fetchBlogList()
  }

}
const mapStateToProps = (state) => {
  return {
    lists: state.BlogList.lists,
    isLoading: state.BlogList.isLoading
  }
}

export default connect(mapStateToProps, {fetchBlogList})(index)


