import React from 'react';

const Badge = (props) => {
  if (props.top) return <span className="badge badge-primary mr-2">置顶</span>;
  if (props.good) return <span className="badge btn-danger mr-2">精华</span>;
  switch (props.tab) {
    case 'ask':
      return <span className="badge btn-secondary mr-2">问答</span>;
    case 'share':
      return <span className="badge btn-success mr-2">分享</span>;
    case 'job':
      return <span className="badge btn-info mr-2">工作</span>;
    case 'dev':
      return <span className="badge btn-warning mr-2">测试</span>;
    default:
      return <span className="badge btn-light mr-2">未分类</span>;
  }
};

export default Badge;
