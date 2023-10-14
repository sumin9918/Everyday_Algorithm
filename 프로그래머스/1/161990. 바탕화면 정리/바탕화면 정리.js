function solution(wallpaper) {
    const reverse_wallpaper = [];
    
    for (let i = 0; i < wallpaper[0].length; i++) {
        const arr = [];
        
        for (let j = 0; j < wallpaper.length; j++) {
            arr.push(wallpaper[j][i]);
        }
        
        reverse_wallpaper.push(arr);
    };
    
    const min_x = Math.min(...wallpaper.map(wp => wp.includes('#') ? [...wp].indexOf('#') : 9999));
    const max_x = Math.max(...wallpaper.map(wp => [...wp].lastIndexOf('#')), 0);
    const min_y = Math.min(...reverse_wallpaper.map(wp => wp.includes('#') ? [...wp].indexOf('#') : 9999));;
    const max_y = Math.max(...reverse_wallpaper.map(wp => [...wp].lastIndexOf('#')), 0);
    
    return [min_y, min_x, max_y + 1, max_x + 1];
}