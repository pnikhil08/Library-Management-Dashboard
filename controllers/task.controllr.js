const Task = require("../models/task.model");

exports.creatTask = async (req, res) => {
  try {
    console.log(req.body);
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    console.log("Error:", err);
    console.log("Message:", err.message);
    console.log("Stack:", err.stack);
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getAllTask = async (re, res) => {
  try {
    const allTask = await Task.find();
    res.status(200).json(allTask);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getTaskById = async (re, res) => {
  try {
    const taskId = re.params.id;

    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({
        message: "Task ID not found",
      });
    }
    res.status(200).json(task);
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({
        message: "Invalid Task ID",
      });
    }

    res.status(500).json({
      message: err.message,
    });
  }
};

// exports.updateTask = async (re, res) => {
//   try {
//     const task = await Task.findByIdAndUpdate(re.params.id, re.body, {
//       new: true,
//       runValidators: true,
//     });
//     res.status(201).json(task);
//   } catch (err) {
//     if (err.name === "CastError") {
//       res.status(400).json({
//         message: "Invalid Task Id",
//       });
//     }

//     res.status(500).json({
//       message: err.message,
//     });
//   }
// };

exports.updateTask = async(re , res) => {
    try{
        const task = await Task.findById(re.params.id);
       if(!task){
        return res.status(404).json({
            message : "Task ID Not Found"
        })
       }

       if(re.body.title !== undefined){
         task.title = re.body.title
       }
       if(re.body.description !== undefined){
        task.description = re.body.description
       }
       if(re.body.completed !== undefined){
        task.completed = re.body.completed
       }

     await task.save();

     res.status(200).json(task)

    }catch(err){
        if(err.name === "CastError"){
          return  res.status(400).json({
                message : "Invalid Task Id"
            })
        }

        res.status(500).json({
            message : err.message
        })
    }
}


// exports.deleteTask = async(re, res) =>{
//     try{
//         const task = await Task.findByIdAndDelete(re.params.id)

//         if(!task){
//          return   res.status(404).json({
//                 message : "Task id not Found"
//             })
//         }
        
//         res.status(200).json({
//             message : "Task is Deleted Sussecfully"
//         })

//     }
//     catch(err){
//         if(err.name === "CastError"){
//             return res.status(400).json({
//                 message : "Invalid Task Id"
//             })
//         }

//         res.status(500).json({
//             message : err.message
//         })
//     }
// }

exports.deleteTask = async(re, res) => {
    try{
        const task = await Task.findById(re.params.id);

        if(!task){
            return res.status(404).json({
                message : "Task Id Not Found"
            })
        }

        await task.deleteOne();

        res.status(200).json({
            message : "Task Deleted Successfully"
        })
    }catch(err){
        return res.status(500).json({
            message : "Server side Error"
        })
    }
}