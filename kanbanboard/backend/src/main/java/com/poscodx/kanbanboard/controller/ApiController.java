package com.poscodx.kanbanboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.poscodx.kanbanboard.dto.JsonResult;
import com.poscodx.kanbanboard.repository.KanbanboardRepository;
import com.poscodx.kanbanboard.vo.TaskVo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class ApiController {
	
	@Autowired
	private KanbanboardRepository kanbanboardRepository;
	
	@DeleteMapping("/api/delete")
	public ResponseEntity<JsonResult> delete(@RequestParam(value="no", required=true, defaultValue="") Long no){
		log.info("Request[DELETE /api]: "+ no);
		kanbanboardRepository.delete(no);
		return ResponseEntity
					.status(HttpStatus.OK)
					.body(JsonResult.success(no));
	}
	
	@GetMapping("/api/card")
	public ResponseEntity<JsonResult> readCard(){
		log.info("Request[GET /api]: ");
		return ResponseEntity
					.status(HttpStatus.OK)
					.body(JsonResult.success(kanbanboardRepository.findCardAll()));
	}
	@GetMapping("/api/task")
	public ResponseEntity<JsonResult> readTask(Long no){
		log.info("Request[GET /api]: ");
		return ResponseEntity
					.status(HttpStatus.OK)
					.body(JsonResult.success(kanbanboardRepository.findTaskAll(no)));
	}
	
	@PostMapping("/api/insert")
	public ResponseEntity<JsonResult> create(@RequestBody TaskVo vo){
		log.info("Request[POST /api]: "+ vo);
		kanbanboardRepository.insert(vo);
		return ResponseEntity
					.status(HttpStatus.OK)
					.body(JsonResult.success(vo));
	}
	
	@PutMapping("/api/update")
	public ResponseEntity<JsonResult> update(@RequestBody TaskVo vo){
		log.info("Request[POST /api]: "+ vo);
		kanbanboardRepository.update(vo);
		return ResponseEntity
					.status(HttpStatus.OK)
					.body(JsonResult.success(vo));
	}
	
	
}
