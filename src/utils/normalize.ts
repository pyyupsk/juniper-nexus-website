export function normalize(path: string) {
    let normalizedPath = '';
    let charCode: number;
    let wordStart = 0;
    for (let i = 0; i < path.length; i++) {
        charCode = path.charCodeAt(i);
        if (charCode === 45) {
            normalizedPath += path.substring(wordStart, i).charAt(0).toUpperCase() + path.substring(wordStart + 1, i);
            wordStart = i + 1;
        } else if (i === path.length - 1) {
            normalizedPath +=
                path
                    .substring(wordStart, i + 1)
                    .charAt(0)
                    .toUpperCase() + path.substring(wordStart + 1);
        }
    }
    return normalizedPath;
}
