export default {
    labels: ['Apr 21', 'Jun 21', 'Aug 21', 'Oct 21', 'Dec 21', 'Feb 22'],
    datasets: [
        {
            label: 'Article Channel Group',
            backgroundColor: 'rgba(0,175,190,.2)',
            data: [50, 39, 10, 40, 70, 44],
            tension: 0.3,
            borderColor: '#00AFBE',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 2,
            pointHoverBackgroundColor: '#00AFBE',
            fill: true,
            pointRadius: 3,
        },
        {
            label: 'Articles',
            data: [130, 99, 78, 60, 190, 60],
            tension: 0.3,
            backgroundColor: 'rgba(0,157,146,.2)',
            borderColor: '#009D92',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 2,
            pointHoverBackgroundColor: '#009D92',
            fill: true,
            pointRadius: 3,
        },
        {
            label: 'Blogs',
            data: [40, 42, 2, 6, 29, 50],
            tension: 0.3,
            backgroundColor: 'rgba(0,157,146,.2)',
            borderColor: '#22A573',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 2,
            pointHoverBackgroundColor: '#22A573',
            fill: true,
            pointRadius: 3,
        },
    ],
}
