export function findParentNode(el, classSelector) {
    while (el.parentNode) {
        el = el.parentNode;

        if (el.className.indexOf(classSelector) >= 0)
            return el;
    }
    return null;
}