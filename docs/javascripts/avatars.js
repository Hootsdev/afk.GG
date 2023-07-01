const desc = getMeta("description");
if (desc === null || desc === void 0 ? void 0 : desc.includes("@")) {
    const regex = /@(\w+)/g;
    let m;
    while ((m = regex.exec(desc)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        m.forEach((match, groupIndex) => {
            console.log(`Found match, group ${groupIndex}: ${match}`);
        });
    }
}
function getMeta(metaName) {
    const metas = document.getElementsByTagName("meta");
    for (const element of metas) {
        if (element.getAttribute("name") === metaName) {
            return element.getAttribute("content");
        }
    }
    return "";
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhdGFycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdmF0YXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNwQyxJQUFJLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7SUFDdkIsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBRXhCLElBQUksQ0FBQyxDQUFDO0lBRU4sT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFO1FBRXRDLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQy9CLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNuQjtRQUdELENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLEVBQUU7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsVUFBVSxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7S0FDSjtDQUNGO0FBRUQsU0FBUyxPQUFPLENBQUMsUUFBUTtJQUN2QixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFcEQsS0FBSyxNQUFNLE9BQU8sSUFBSSxLQUFLLEVBQUU7UUFDM0IsSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUM3QyxPQUFPLE9BQU8sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEM7S0FDRjtJQUVELE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQyJ9