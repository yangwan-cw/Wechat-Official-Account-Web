// 改进vh
const vh = window.innerHeight * 1;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 1;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

document.addEventListener('DOMContentLoaded', (event) => {
    // 获取URL参数
    const urlParams = new URLSearchParams(window.location.search);
    const replyText = urlParams.get('replyText');

    // 检测是否有replyText参数
    if (replyText) {
        // 如果有参数，则更新wechat-need-reply-text的内容
        document.getElementById('wechat-need-reply').style.display = 'flex';
        document.getElementById('wechat-need-reply-text').textContent = replyText;
    } else {
        // 如果没有参数，则隐藏wechat-need-reply部分
        document.getElementById('wechat-need-reply').style.display = 'none';
    }
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText('小烊队长');
                alert('复制成功！');
            } catch (err) {
                console.error('复制失败:', err);
            }
        });
    });
});