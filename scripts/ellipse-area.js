function calculateEllipseArea(){
    const ellipseMajorRadius = getInputValueById('ellipse-major-radius');
    const ellipseMinorRadius = getInputValueById('ellipse-minor-radius');
    const area = 3.14 * ellipseMajorRadius *ellipseMinorRadius;
    setInnerById('ellipse-area',area);
}