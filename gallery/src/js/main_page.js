import React from 'react';
import '../css/main_page.css';
import { List, Avatar, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
        
        };
       
    }
    componentDidMount() {
      
    }
    
    render() {
        const listData = [];
        for (let i = 0; i < 23; i++) {
            listData.push({
                title: `paintings ${i}`,
                description:
                'Types of paintings',
                content:
                'Descriptions of paintings',
            });
        }

        return (
            <List
            itemLayout="vertical"
            size="small"
            dataSource={listData}
            renderItem={item => (
              <List.Item
                key={item.title}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }
              >
                 <List.Item.Meta
                    title={<a href={item.href}>{item.title}</a>}
                    description={item.description}
                    />
                {item.content}
              </List.Item>
            )}
          />
       );
     }
}
export default MainPage;