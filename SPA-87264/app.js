$(document).ready(function () {

	// get all records
	$.ajax({
		url: "api.php",
		type: "GET",
		success: function (data) {
			$("#tableBody").html(data);
		}
	});

	// add new record
	$("#addForm").submit(function (e) {
		e.preventDefault();

		$.ajax({
			url: "api.php",
			type: "POST",
			data: $(this).serialize(),
			success: function (data) {
				$("#addModal").modal('hide');
				$("#tableBody").html(data);
				$("#addForm")[0].reset();
			}
		});
	});

	// delete record
	$(document).on("click", ".deleteRecord", function () {
		var id = $(this).data("id");

		if (confirm("Are you sure you want to delete this record?")) {
			$.ajax({
				url: "api.php?id=" + id,
				type: "DELETE",
				success: function (data) {
					$("#tableBody").html(data);
				}
			});
		}
	});

	// edit record
	$(document).on("click", ".editRecord", function () {
		var id = $(this).data("id");
		var name = $(this).data("name");
		var email = $(this).data("email");

		$("#editModal #editId").val(id);
		$("#editModal #editName").val(name);
		$("#editModal #editEmail").val(email);

		$("#editModal").modal('show');
	});

	$("#editForm").submit(function (e) {
		e.preventDefault();

		$.ajax({
			url: "api.php",
			type: "PUT",
			data: $(this).serialize(),
			success: function (data) {
				$("#editModal").modal('hide');
				$("#tableBody").html(data);
			}
		});
	});


});
