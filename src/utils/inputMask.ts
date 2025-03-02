// format input value based on mask
export const createMask = ({ textValue, mask }: { textValue: string, mask: string }) => {
    const formattedValue = textValue.replace(/(\D)/g, '');
    const splitValue = formattedValue.split('');
    let splitMask = mask.split('');

    for (const [index, maskChar] of splitMask.entries()) {
        if (splitValue.length === 0) {
            splitMask = splitMask.slice(0, index);
            break;

        }
        if (maskChar === '#') {
            splitMask[index] = splitValue.shift() || ''
        }
    }


    return splitMask.join('');
}
