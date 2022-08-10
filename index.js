function superbowlWin (recordAry) {
    const win = recordAry.find(element => {
        return element.result === "W";
    });
    return (win ? win.year : undefined);
}