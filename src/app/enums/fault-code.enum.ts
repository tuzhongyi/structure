export var FaultCode = {
  '0': '操作成功。',
  '1': '登录失败：未知的用户名或错误密码。',
  '2': '没有足够的安全权限。',
  '3': '资源未找到。',
  '4': '数据格式不正确。',
  '5': '资源已存在。',
  '6': '无法删除正在使用的资源。',
  '7': '无法删除对象本身。',
  '8': '非首次登录系统，无法在没有口令的情况下创建管理员帐号。',
  '9': '不支持的操作，请换用其他操作。',
  '10': '设备出错，请检查网络是否正常或设备信息是否正确。',
  '11': '非法的操作。',
  '12': '关联关系已存在。如果要修改关联关系，前选择忽略现有的关联。',
  '13': '无法通过现有参数获取唯一值。如果要继续该操作请指定更多的参数值。',
  '14': '无法找到可达的摄像机信息。',
  '15': '唯一性资源已存在。',
  '16': '系统信息资源不存在。',
  '17': '标识符(Id)格式非法。',
  '18': '标示符(Id)已存在。',
  '19': '重复的用户名。',
  '20': '设备下线。',
  '21': '用户已登陆。',
  '22': '资源数量已达上限。',
  '30': '资源申请频率过高，被限制。',
  '31': '上游服务请求失败。错误内容参见Exception。',
  '50': 'AI模型格式不正确。',
  '400':
    '请求出错。由于语法格式有误，服务器无法理解此请求。不作修改，客户程序就无法重复此请求。',
  '401': '未授权。此错误表明传输给服务器的证书与登录服务器所需的证书不匹配。',
  '403':
    '服务不可用，这通常时因为服务没有启动，或者KEY凭证码不存在，需要上传有效的KEY文件。',
  '500': '服务器内部错误。',
};
