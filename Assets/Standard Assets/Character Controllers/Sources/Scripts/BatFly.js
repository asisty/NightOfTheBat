var cameraSensitivity :float= 90;
var moveUp :float= 4;
var moveDown: float=4;
var normalMoveSpeed:float = 10;
private var rotationX :float= 0.0f;
private var rotationY :float= 0.0f;

function Start ()
{
Update();
}

function Update ()
{
rotationX += Input.GetAxisRaw("Mouse X") * cameraSensitivity * Time.deltaTime;
rotationY += Input.GetAxisRaw("Mouse Y") * cameraSensitivity * Time.deltaTime;
rotationY = Mathf.Clamp (rotationY, -90, 90);

if (Input.GetKey (KeyCode.LeftArrow) || Input.GetKey (KeyCode.RightArrow))
{
transform.position += transform.forward * normalMoveSpeed * Input.GetAxisRaw("Vertical") * Time.deltaTime;
transform.position += transform.right * normalMoveSpeed * Input.GetAxisRaw("Horizontal") * Time.deltaTime;
}
else if (Input.GetKey (KeyCode.UpArrow) || Input.GetKey (KeyCode.DownArrow))
{
transform.position += transform.forward * normalMoveSpeed * Input.GetAxisRaw("Vertical") * Time.deltaTime;
transform.position += transform.right * normalMoveSpeed * Input.GetAxisRaw("Horizontal") * Time.deltaTime;
}


if (Input.GetKey (KeyCode.LeftShift))
 {
 transform.position += transform.up * moveUp * Time.deltaTime;
 }
if (Input.GetKey (KeyCode.RightShift))
 {
 transform.position -= transform.up * moveDown * Time.deltaTime;
 }


}
