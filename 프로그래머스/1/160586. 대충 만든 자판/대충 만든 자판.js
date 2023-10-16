function solution(keymap, targets) {
    return targets.map(target => {
        let count = 0;
        
        for (let i = 0; i < target.length; i++) {
            let idxs = [];
            
            for (let j = 0; j < keymap.length; j++) {
                const targetIdx = keymap[j].indexOf(target[i]) + 1;
                
                if (targetIdx) idxs.push(targetIdx);
            }

            if (idxs.length) count += Math.min(...idxs);
            else return -1;
        }
        
        return count;
    })
}