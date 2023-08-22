<?php


$servername = "localhost";
$username = "db_87264";
$password = "[REDACTED]";
$dbname = "87264_database";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) {
	die("Connection failed: " . mysqli_connect_error());
}

// get all records
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
	$sql = "SELECT * FROM records";
	$result = mysqli_query($conn, $sql);

	$output = '';
	while ($row = mysqli_fetch_assoc($result)) {
		$output .= '
			<tr>
				<td>' . $row["id"] . '</td>
				<td>' . $row["name"] . '</td>
				<td>' . $row["email"] . '</td>
				<td>
					<button type="button" class="btn btn-sm btn-primary editRecord" data-id="' . $row["id"] . '" data-name="' . $row["name"] . '" data-email="' . $row["email"] . '">Edit</button>
					<button type="button" class="btn btn-sm btn-danger deleteRecord" data-id="' . $row["id"] . '">Delete</button>
				</td>
			</tr>
		';
	}

	echo $output;
}

// add new record
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
	$name = mysqli_real_escape_string($conn, $_POST['name']);
	$email = mysqli_real_escape_string($conn, $_POST['email']);

	$sql = "INSERT INTO records (name, email) VALUES ('$name', '$email')";
	mysqli_query($conn, $sql);

	$sql = "SELECT * FROM records";
	$result = mysqli_query($conn, $sql);

	$output = '';
	while ($row = mysqli_fetch_assoc($result)) {
		$output .= '
			<tr>
				<td>' . $row["id"] . '</td>
				<td>' . $row["name"] . '</td>
				<td>' . $row["email"] . '</td>
				<td>
					<button type="button" class="btn btn-sm btn-primary editRecord" data-id="' . $row["id"] . '" data-name="' . $row["name"] . '" data-email="' . $row["email"] . '">Edit</button>
					<button type="button" class="btn btn-sm btn-danger deleteRecord" data-id="' . $row["id"] . '">Delete</button>
				</td>
			</tr>
		';
	}

	echo $output;
}

// delete record
if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
	$id = $_GET['id'];

	$sql = "DELETE FROM records WHERE id=$id";
	mysqli_query($conn, $sql);

	$sql = "SELECT * FROM records";
	$result = mysqli_query($conn, $sql);

	$output = '';
	while ($row = mysqli_fetch_assoc($result)) {
		$output .= '
			<tr>
				<td>' . $row["id"] . '</td>
				<td>' . $row["name"] . '</td>
				<td>' . $row["email"] . '</td>
				<td>
					<button type="button" class="btn btn-sm btn-primary editRecord" data-id="' . $row["id"] . '" data-name="' . $row["name"] . '" data-email="' . $row["email"] . '">Edit</button>
					<button type="button" class="btn btn-sm btn-danger deleteRecord" data-id="' . $row["id"] . '">Delete</button>
				</td>
			</tr>
		';
	}

	echo $output;
}

// edit record
if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
	parse_str(file_get_contents("php://input"), $post_vars);

	$id = mysqli_real_escape_string($conn, $post_vars['id']);
	$name = mysqli_real_escape_string($conn, $post_vars['name']);
	$email = mysqli_real_escape_string($conn, $post_vars['email']);

	$sql = "UPDATE records SET name='$name', email='$email' WHERE id=$id";
	mysqli_query($conn, $sql);

	$sql = "SELECT * FROM records";
	$result = mysqli_query($conn, $sql);

	$output = '';
	while ($row = mysqli_fetch_assoc($result)) {
		$output .= '
            <tr>
                <td>' . $row["id"] . '</td>
                <td>' . $row["name"] . '</td>
                <td>' . $row["email"] . '</td>
                <td>
                    <button type="button" class="btn btn-sm btn-primary editRecord" data-id="' . $row["id"] . '" data-name="' . $row["name"] . '" data-email="' . $row["email"] . '">Edit</button>
                    <button type="button" class="btn btn-sm btn-danger deleteRecord" data-id="' . $row["id"] . '">Delete</button>
                </td>
            </tr>

		';
	}

	echo $output;
}

mysqli_close($conn);

?>